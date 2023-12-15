<?php

require_once('private/config.php');
require_once('private/database.php');

class WebTalk extends Database {
    public function __construct() {
        parent::__construct(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        $this->connect();
    }

    public function uploadData($data) {
        $validated_data = $this->validateData($data);
        $binary_data = $this->toBinary(json_encode($validated_data));
        $binary_data_hash = hash('sha256', $binary_data);
        $ip_address = $this->getIpAddress();

        if ($existingShortURL = $this->findShortURL($binary_data_hash)) {
            $this->sendJsonResponse(200, array('url' => 'https://app.leesj.dev/webtalk/' . $existingShortURL));
        } else {
            $short_url = $this->createUniqueShortURL();

            $this->executePreparedQuery(
                'INSERT INTO WEBTALK (ip_address, binary_data, binary_data_hash, short_url) VALUES (?, ?, ?, ?)', 
                array($ip_address, $binary_data, $binary_data_hash, $short_url), 
                'ssss'
            );

            $this->sendJsonResponse(200, array('url' => 'https://app.leesj.dev/webtalk/' . $short_url));
        }
    }

    private function getIpAddress() {
        foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key) 
        {
            if (array_key_exists($key, $_SERVER) !== true)
            {
                continue;
            }
            foreach (explode(',', $_SERVER[$key]) as $ip)
            {
                $ip = trim($ip);
                if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false) 
                {
                    return $ip;
                }
            }
        }
        return 'UNKNOWN';
    }

    private function toBinary($string) {
        $binaryString = mb_convert_encoding($string, 'UTF-16LE');
        $base64Encoded = base64_encode($binaryString);
        return str_replace('=', '', $base64Encoded);
    }

    private function validateData($data) {
        $validated_data = [];

        if (!isset($data['room']) || !isset($data['data'])) {
            $this->sendJsonResponse(400, array('error' => 'Invalid Data'));
        }
    
        foreach ($data['data'] as $item) {
            if (!isset($item['type'])) {
                $this->sendJsonResponse(400, array('error' => 'Invalid Data'));
            }
            switch ($item['type']) {
                case 'UI':
                    if (!isset($item['message'])) {
                        $this->sendJsonResponse(400, array('error' => 'Invalid Data'));
                    }
                    $validated_data[] = [
                        'type' => $item['type'],
                        'message' => $item['message']
                    ];
                    break;
                case 'MESSAGE_MINE':
                    if (!isset($item['time']) || !isset($item['message'])) {
                        $this->sendJsonResponse(400, array('error' => 'Invalid Data'));
                    }
                    $validated_data[] = [
                        'type' => $item['type'],
                        'time' => $item['time'],
                        'message' => $item['message']
                    ];
                    break;
                case 'MESSAGE':
                    if (!isset($item['time']) || !isset($item['name']) || !isset($item['profile']) || !isset($item['message'])) {
                        $this->sendJsonResponse(400, array('error' => 'Invalid Data'));
                    }
                    $validated_data[] = [
                        'type' => $item['type'],
                        'name' => $item['name'],
                        'profile' => $item['profile'],
                        'time' => $item['time'],
                        'message' => $item['message']
                    ];
                    break;
                default:
                    $this->sendJsonResponse(400, array('error' => 'Invalid Data'));
                    break;
            }
        }
    
        return [
            'room' => $data['room'],
            'data' => $validated_data
        ];
    }
    
    private function findBinaryData($value) {
        $query = 'SELECT * FROM WEBTALK WHERE BINARY short_url = ?';
        $params = [$value];
        $types = 's';

        $result = $this->executePreparedQuery($query, $params, $types);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['binary_data'];
        }

        return false;
    }

    private function findShortURL($value) {
        $query = 'SELECT * FROM WEBTALK WHERE binary_data_hash = ?';
        $params = [$value];
        $types = 's';

        $result = $this->executePreparedQuery($query, $params, $types);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row['short_url'];
        }

        return false;
    }

    private function createUniqueShortURL() {
        $short_url = $this->generateRandomString(15);

        if (!$this->findBinaryData($short_url)) {
            return $short_url;
        } else {
            return $this->createUniqueShortURL();
        }
    }

    private function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';

        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }

        return $randomString;
    }

    private function sendJsonResponse($responseCode, $responseData) {
        http_response_code($responseCode);
        header('Content-Type: application/json; charset=utf-8');

        echo json_encode(array(
            'status' => $responseCode,
            'data' => $responseData
        ), JSON_UNESCAPED_UNICODE);

        exit();
    }
}

$webtalk = new WebTalk;
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$webtalk->uploadData($data);
$webtalk->close();

?>
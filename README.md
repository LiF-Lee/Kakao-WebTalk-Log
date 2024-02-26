# Kakao WebTalk Log

카카오톡 UI의 웹 로그 기록 서비스

![image](https://github.com/LiF-Lee/Kakao-WebTalk-Log/assets/66173558/240192fe-d1f0-46ba-9386-0490282c61bb)

---

### URL: https://app.leesj.dev/webtalk/create
### Method: POST
### Content-Type: application/json

### 요청 본문
- **room** (`string`): 방 이름
- **data** (`array`):
    - **type** (`string`): 메시지 유형 (UI, MESSAGE_MINE, MESSAGE)
    - **message** (`string`): 메시지 내용
    - **time** (`string`, 선택 사항): 시간, type이 MESSAGE 또는 MESSAGE_MINE일 때 사용됩니다.
    - **name** (`string`, 선택 사항): 이름, type이 MESSAGE일 때 사용됩니다.
    - **profile** (`string`, 선택 사항): 프로필 이미지, type이 MESSAGE일 때 사용됩니다.

### 예제 요청 본문
```json
{
    "room": "Debug Room",
    "data": [
        {
            "type": "UI",
            "message": "2099년 1월 1일 목요일"
        },
        {
            "type": "UI",
            "message": "생각하는 라이언님이 들어왔습니다."
        },
        {
            "type": "MESSAGE_MINE",
            "time": "오후 4:25",
            "message": "테스트"
        },
        {
            "type": "MESSAGE_MINE",
            "time": "오후 4:25",
            "message": "테스트\n테스트 테스트\n테스트 테스트 테스트\n테스트 테스트 테스트 테스트\n테스트 테스트 테스트 테스트 테스트"
        },
        {
            "type": "UI",
            "message": "생각하는 라이언님이 나갔습니다."
        },
        {
            "type": "MESSAGE",
            "time": "오후 4:25",
            "name": "Test",
            "profile": "https://cdn.pixabay.com/photo/2022/04/13/16/46/girl-7130668_1280.png",
            "message": "이것도 테스트"
        },
        {
            "type": "MESSAGE",
            "time": "오후 4:26",
            "name": "Test 2",
            "profile": "https://cdn.pixabay.com/photo/2023/12/07/11/11/girl-8435340_1280.png",
            "message": "안녕하세요"
        },
        {
            "type": "MESSAGE_MINE",
            "time": "오후 4:27",
            "message": "안녕하세요"
        }
    ]
}
```

### 요청 응답 본문

```json
{
    "status": 200,
    "data": {
        "url": "https://app.leesj.dev/webtalk/KoTA5tMmYmXsqXO"
    }
}
```

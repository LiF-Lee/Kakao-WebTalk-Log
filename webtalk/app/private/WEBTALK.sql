CREATE TABLE `WEBTALK` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `ip_address` text NOT NULL COMMENT 'IP Address',
  `create_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'Create Time',
  `binary_data` longtext NOT NULL COMMENT 'Binary Data',
  `binary_data_hash` text NOT NULL COMMENT 'Binary Data Hash',
  `short_url` text NOT NULL COMMENT 'Short URL',
  `enable` int(11) NOT NULL DEFAULT 1 COMMENT 'Enable',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci

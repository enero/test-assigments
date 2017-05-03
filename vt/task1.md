CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `gender` tinyint(4) DEFAULT '0',
  `birth_date` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;


CREATE TABLE `phone_numbers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id_phone_index` (`user_id`,`phone`),
  CONSTRAINT `phone_numbers_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=0 DEFAULT CHARSET=utf8;


SELECT
  CONCAT_WS(' ', u.last_name, u.first_name) AS name, 
  COUNT(n.`phone`) AS phone_count,
  FLOOR((UNIX_TIMESTAMP() - u.`birth_date`) / (3600 * 24 * 365)) AS year
FROM `test_users` u 
LEFT JOIN `test_phone_numbers` n 
  ON u.`id` = n.`user_id`
WHERE u.`gender` = 2
GROUP BY u.`id`
HAVING year >= 18 AND year <= 22;




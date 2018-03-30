INSERT INTO users
(username)
VALUES(${username});

SELECT user_id FROM users
WHERE username = ${username}

INSERT INTO users
(username, password)
VALUES(${username}, ${password});

SELECT user_id FROM users
WHERE username = ${username} AND
password = ${password};

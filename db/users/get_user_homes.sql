SELECT h.*
FROM homes h INNER JOIN users u
ON h.ownerId = u.${userId}

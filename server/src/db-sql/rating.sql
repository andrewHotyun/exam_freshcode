UPDATE Users 
SET balance = balance + 10 
WHERE id IN (
    SELECT id 
    FROM Users 
    WHERE role = 'creative' 
    ORDER BY rating DESC 
    LIMIT 3
)
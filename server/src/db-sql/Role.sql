SELECT role, COUNT(*) as count 
FROM Users
GROUP BY role;
UPDATE "Users"
SET balance = balance + (
    SELECT 0.1*SUM("prize")
    FROM "Users" INNER JOIN "Contests" ON ("Users".id="Contests"."userId")
    WHERE role='customer' AND "createdAt" BETWEEN '2020-12-25' AND '2021-01-14'
    GROUP BY "Users".id
)
WHERE "Users".id IN (
    SELECT "Users".id
    FROM "Users" INNER JOIN "Contests" ON ("Users".id="Contests"."userId")
    WHERE role='customer' AND "createdAt" BETWEEN '2020-12-25' AND '2021-01-14'
);
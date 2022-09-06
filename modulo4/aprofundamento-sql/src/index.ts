/* SELECT * FROM Actor;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a) Deleta a coluna salário --
-- b) Modifica o gênero e sexo do item 6 --
-- c) Modifica o gênero de todos os gêneros --
-- d) --

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- exercício 2 --
-- a) --
UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "003";

-- b) --
UPDATE Actor
SET name = "JULIANA PAES"
WHERE id = "005";

-- c) --
UPDATE Actor
SET 
name = "Bruna Marquezine"
WHERE id = "005";


-- exercício 3 --
-- a) --
DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) --
DELETE FROM Acto WHERE Female = "male" AND salary > 1000000;


-- exercício 4 --
-- a) --
SELECT MAX(salary) FROM Actor;

-- b) --
SELECT MIN (salary) FROM Actor WHERE gender = "female";

-- c) -- 
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) --
SELECT SUM(salary) FROM Actor;

-- exercicio 5 --
SELECT * FROM Actor LIMIT 3;
SELECT * FROM Actor ORDER BY name ASC;
SELECT * FROM Actor ORDER BY name ASC LIMIT 4;
SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- a) É uma forma de escolher e organizar os resultados --
-- b) --
SELECT id, name FROM Actor
ORDER BY name DESC;
-- c) -- 
SELECT * FROM Actor
ORDER BY salary;
-- d) --
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
-- e) --
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;


-- exercício 6 --
-- a) --
CREATE TABLE Movie (
	id VARCHAR(225) PRIMARY KEY,
    title VARCHAR(225) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synopsis, release_date, rating)
VALUES(
"008",
"Interstellar",
"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
"2014-11-7",
8
);

SELECT * FROM Movie;

ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);

-- b) --
ALTER TABLE Movie CHANGE rating rating FLOAT;

-- c) --
UPDATE Movie 
SET 
	playing_limit_date = "2020-03-31"
WHERE id = "002";

-- d) --
DELETE FROM Movie WHERE id = "003";

*/
/*

CREATE TABLE alunos_labenu(
id INT PRIMARY KEY,
nome VARCHAR (255) NOT NULL,
email VARCHAR (255) NOT NULL UNIQUE,
idade INT );

INSERT INTO alunos_labenu(id, nome, email, idade)
VALUES (2, "Julia", "julia@gmail.com", 30);

SELECT * FROM alunos_labenu;

SELECT email FROM alunos_labenu
WHERE idade<18;

INSERT INTO alunos_labenu(id,nome,email)
VALUES (3, "Joao", "joao@gmail.com");

DELETE FROM alunos_labenu WHERE id = 3;

TRUNCATE TABLE alunos_labenu;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "Female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"006",
"Julia Juliana",
719333.33,
"1979-03-26",
"Female"
);

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Filmes (id, name, sinopse, release_date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);


*/
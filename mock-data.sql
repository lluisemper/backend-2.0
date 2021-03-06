CREATE TABLE IF NOT EXISTS users(
    id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    password text
);

CREATE TABLE IF NOT EXISTS posts(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    postId INTEGER REFERENCES users(id)
);

INSERT INTO users(name, password)
    VALUES('lluis', 12345);

INSERT INTO users(name, password)
    VALUES('marc', 12345);

INSERT INTO posts(name, postId)
    VALUES('short cut', 1);

INSERT INTO posts(name, postId)
    VALUES('create react app', 1);
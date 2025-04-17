CREATE TABLE votes (
    name VARCHAR(50) PRIMARY KEY,
    count INT DEFAULT 0
);

INSERT INTO votes (name, count) VALUES ('Sachin Tendulkar', 0), ('Virat Kohli', 0), ('MS Dhoni', 0);
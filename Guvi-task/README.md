Database name : login

CREATE DATABASE login;



CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_linkedin VARCHAR(255),
    user_password VARCHAR(255) NOT NULL
);
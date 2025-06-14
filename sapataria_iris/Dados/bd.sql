CREATE DATABASE sapataria;
USE sapataria;

CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    endereco TEXT NOT NULL,
    valor DECIMAL(10,2) NOT NULL,
    entrada DECIMAL(10,2) NOT NULL,
    data_compra DATE NOT NULL
);

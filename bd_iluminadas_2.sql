DROP DATABASE IF EXISTS iluminadas;

CREATE DATABASE Iluminadas;

USE Iluminadas;

CREATE TABLE tbl_Cliente (
	id_cliente INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nome_cliente VARCHAR(100) NOT NULL,
    CPF_cliente VARCHAR(11) NOT NULL UNIQUE,
    telefone_cliente VARCHAR(11) NOT NULL,
    email_cliente VARCHAR(100) NOT NULL,
    senha_cliente_hash VARCHAR(50) NOT NULL
);

CREATE TABLE tbl_Produto (
	id_produto INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nome_produto VARCHAR(100) NOT NULL,
    descricao_produto TEXT(11) NOT NULL,
    preco_produto DECIMAL(8,2) UNSIGNED NOT NULL,
	estoque_produto INT(100) UNSIGNED NOT NULL,
    imagem_produto MEDIUMBLOB NOT NULL
);

CREATE TABLE tbl_Categoria (
	id_categoria INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	nome_categoria VARCHAR(50) NOT NULL,
    descricao_categoria TEXT(11) NOT NULL
);

CREATE TABLE tbl_Categoria_Produto (
	id_Categoria_Produto INT UNSIGNED NOT NULL,
    id_Produto_Categoria INT UNSIGNED NOT NULL,
    CONSTRAINT FK_CAT_PROD
    FOREIGN KEY (id_Categoria_Produto) 
    REFERENCES tbl_Categoria (id_categoria),
    CONSTRAINT FK_PROD_CAT
    FOREIGN KEY (id_Produto_Categoria) 
    REFERENCES tbl_Produto (id_produto)
);

CREATE TABLE tbl_Enderecos (
	id_enderecos INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	CEP VARCHAR(8) NOT NULL,
    complemento TEXT(200),
    numero INT(11) UNSIGNED NOT NULL,
    bairro VARCHAR(30) NOT NULL,
    cidade VARCHAR(30) NOT NULL,
    UF VARCHAR(2) NOT NULL,
    id_Endereco_Cliente INT UNSIGNED NOT NULL,
    CONSTRAINT FK_END_CLI
    FOREIGN KEY (id_Endereco_Cliente) 
    REFERENCES tbl_cliente (id_cliente)
);

CREATE TABLE tbl_Venda (
	id_venda INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    data_venda DATE NOT NULL,
	id_Venda_Cliente INT UNSIGNED NOT NULL,
    CONSTRAINT FK_VEN_CLI
    FOREIGN KEY (id_Venda_Cliente) 
    REFERENCES tbl_cliente (id_cliente)
);

CREATE TABLE tbl_Item_Venda (
	id_item_venda INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	quantidade_produto INT(100) NOT NULL,
    id_itemvenda_venda INT UNSIGNED NOT NULL,
    id_ItemVenda_Produto INT UNSIGNED NOT NULL,
    CONSTRAINT FK_ITEMVEN_VEN
    FOREIGN KEY (id_itemvenda_venda) 
    REFERENCES tbl_Venda (id_venda),
    CONSTRAINT FK_ITEMPED_PROD
    FOREIGN KEY (id_ItemVenda_Produto) 
    REFERENCES tbl_produto (id_produto)
);



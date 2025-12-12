-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12/12/2025 às 13:50
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api-bd`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `clientes`
--

CREATE TABLE `clientes` (
  `codCli` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `lograduro` varchar(255) DEFAULT NULL,
  `numero` int(11) DEFAULT NULL,
  `cpf` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `clientes`
--

INSERT INTO `clientes` (`codCli`, `nome`, `lograduro`, `numero`, `cpf`) VALUES
(1, 'João Silva', 'Rua das Flores', 120, 2147483647),
(2, 'Maria Oliveira', 'Avenida Brasil', 450, 2147483647),
(3, 'Carlos Pereira', 'Rua Central', 89, 2147483647),
(4, 'Ana Souza', 'Travessa Azul', 33, 2147483647),
(5, 'João Silva', 'Rua das Flores', 120, 2147483647),
(6, 'Alan Pererira', 'Avenida Brasil', 450, 2147483647),
(7, 'Carlos Pereira', 'Rua Central', 89, 2147483647);

-- --------------------------------------------------------

--
-- Estrutura para tabela `fornecedores`
--

CREATE TABLE `fornecedores` (
  `codFornce` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `logradouro` varchar(255) DEFAULT NULL,
  `contato` int(11) DEFAULT NULL,
  `cnpj` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `fornecedores`
--

INSERT INTO `fornecedores` (`codFornce`, `nome`, `logradouro`, `contato`, `cnpj`) VALUES
(1, 'Alimentos Brasil Ltda', 'Rua das Indústrias, 500', 2147483647, 2147483647),
(2, 'Comercial Vitória', 'Avenida Central, 210', 2147483647, 2147483647),
(3, 'Distrbuidora Sol das Nascentes', 'Rua dos Comerciantes, 45', 2147483647, 2147483647),
(4, 'Tech Supplies', 'Avenida Tecnológica, 900', 2147483647, 2147483647);

-- --------------------------------------------------------

--
-- Estrutura para tabela `funcionarios`
--

CREATE TABLE `funcionarios` (
  `codFunc` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dataNascimento` date DEFAULT NULL,
  `dataInicio` date DEFAULT NULL,
  `cpf` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `funcionarios`
--

INSERT INTO `funcionarios` (`codFunc`, `nome`, `email`, `dataNascimento`, `dataInicio`, `cpf`) VALUES
(1, 'Carla Souza', 'carla.souza@gmail.com', '1988-04-20', '2024-03-15', 2147483647),
(2, 'Laercio Silva', 'carla.souza@gmail.com', '1988-04-20', '2024-03-15', 2147483647),
(4, 'Carla Souza 4', 'carla.souza@gmail.com', '1988-04-20', '2024-03-15', 2147483647);

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `codProd` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `price` float(8,2) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `codFornce` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`codProd`, `nome`, `price`, `date`, `bio`, `codFornce`) VALUES
(1, 'Boné Aba Reta Urban', 59.90, '2025-02-13', 'Boné com design urbano, perfeito para o dia a dia.', 2),
(2, 'Moletom Oversized Black', 199.00, '2025-02-14', 'Moletom confortável, tecido premium, estilo oversized.', 3),
(3, 'VideoGame', 149.50, '2025-02-15', 'Calça cargo com múltiplos bolsos e tecido resistente.', 3),
(4, 'Boné Aba Reta Urban', 59.90, '2025-02-13', 'Boné com design urbano, perfeito para o dia a dia.', 2),
(5, 'Moletom Oversized Black', 199.00, '2025-02-14', 'Moletom confortável, tecido premium, estilo oversized.', 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `codUsu` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `dataNascimento` date DEFAULT NULL,
  `cpf` int(11) DEFAULT NULL,
  `codFunc` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `usuarios`
--

INSERT INTO `usuarios` (`codUsu`, `nome`, `email`, `dataNascimento`, `cpf`, `codFunc`) VALUES
(1, 'Eduardo Silva', 'eduardo.silva@example.com', '2002-07-15', 2147483647, 1),
(3, 'Eduardo Silva', 'eduardo.silva@example.com', '2002-07-15', 2147483647, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas`
--

CREATE TABLE `vendas` (
  `codVenda` int(10) UNSIGNED NOT NULL,
  `nome` varchar(255) DEFAULT NULL,
  `vendedor` varchar(255) DEFAULT NULL,
  `cliente` varchar(255) DEFAULT NULL,
  `forncedor` varchar(255) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `codProd` int(10) UNSIGNED NOT NULL,
  `codFornce` int(10) UNSIGNED NOT NULL,
  `codCli` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `vendas`
--

INSERT INTO `vendas` (`codVenda`, `nome`, `vendedor`, `cliente`, `forncedor`, `price`, `codProd`, `codFornce`, `codCli`) VALUES
(1, 'Venda #002', 'Marcos Santos', 'Pedro Reis', 'Fornecedor XYZ', 159, 2, 1, 2),
(2, 'Jonas Carvalho', 'João Carvalho', 'Bruna Castro', 'Fornecedor Alpha', 449, 3, 2, 3),
(3, 'Venda #004', 'Carla Borges', 'Felipe da Luz', 'Fornecedor Beta', 89, 1, 3, 2),
(4, 'Venda #002', 'Marcos Santos', 'Pedro Reis', 'Fornecedor XYZ', 159, 2, 1, 2),
(6, 'Venda #004', 'Carla Borges', 'Felipe da Luz', 'Fornecedor Beta', 89, 1, 3, 2);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`codCli`);

--
-- Índices de tabela `fornecedores`
--
ALTER TABLE `fornecedores`
  ADD PRIMARY KEY (`codFornce`);

--
-- Índices de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  ADD PRIMARY KEY (`codFunc`);

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`codProd`),
  ADD KEY `produtos_codfornce_foreign` (`codFornce`);

--
-- Índices de tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`codUsu`),
  ADD KEY `usuarios_codfunc_foreign` (`codFunc`);

--
-- Índices de tabela `vendas`
--
ALTER TABLE `vendas`
  ADD PRIMARY KEY (`codVenda`),
  ADD KEY `vendas_codprod_foreign` (`codProd`),
  ADD KEY `vendas_codfornce_foreign` (`codFornce`),
  ADD KEY `vendas_codcli_foreign` (`codCli`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `codCli` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `fornecedores`
--
ALTER TABLE `fornecedores`
  MODIFY `codFornce` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `funcionarios`
--
ALTER TABLE `funcionarios`
  MODIFY `codFunc` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `codProd` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `codUsu` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `vendas`
--
ALTER TABLE `vendas`
  MODIFY `codVenda` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `produtos`
--
ALTER TABLE `produtos`
  ADD CONSTRAINT `produtos_codfornce_foreign` FOREIGN KEY (`codFornce`) REFERENCES `fornecedores` (`codFornce`);

--
-- Restrições para tabelas `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_codfunc_foreign` FOREIGN KEY (`codFunc`) REFERENCES `funcionarios` (`codFunc`);

--
-- Restrições para tabelas `vendas`
--
ALTER TABLE `vendas`
  ADD CONSTRAINT `vendas_codcli_foreign` FOREIGN KEY (`codCli`) REFERENCES `clientes` (`codCli`),
  ADD CONSTRAINT `vendas_codfornce_foreign` FOREIGN KEY (`codFornce`) REFERENCES `fornecedores` (`codFornce`),
  ADD CONSTRAINT `vendas_codprod_foreign` FOREIGN KEY (`codProd`) REFERENCES `produtos` (`codProd`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

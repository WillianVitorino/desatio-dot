# desatio-dot
Cypress Automated Tests


🚀 Introdução

Este repositório contém uma suíte de testes automatizados para validar a funcionalidade de cadastro da plataforma Magento Softwar Testing Board. Utilizei a ferramenta Cypress, um framework robusto para testes de ponta a ponta, para garantir a qualidade e confiabilidade da funcionalidade.
✅ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

    Node.js (versão 18 ou superior)
    npm (normalmente incluído com o Node.js)
    Cypress (opcional, pois será instalado via npm)

🛠️ Instalação

    https://github.com/WillianVitorino/desatio-dot.git


Instale as dependências:

    npm install


📜 Comandos Disponíveis

Após realizar o clone e instalar as dependências, o comando que executa os testes é este:

    cy:run
    
🧪 Pipeline

O arquivo de configuração do Github Actions está na branch 'ci', onde a mesma é responsável por executar os testes. Está configurada para executar os testes após algum evento na própria branch.


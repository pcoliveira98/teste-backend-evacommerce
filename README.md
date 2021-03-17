# Teste Back-End: Eva Commerce 

# Sobre o projeto
Este projeto é uma API para efetuar logins, cadastros de usuários, produtos e imagens. Foi desenvolvido como forma de teste para a empresa Eva Commerce.

# Tecnologias utilizadas
## Back end
- Node.js
- Express
- Sequelize
- Postgresql
- Multer
- JWT
- Bcryptjs

# Como executar o projeto

Pré-requisitos: npm, postman e postgresql instalados 

```bash
# crie uma base de dados no postgresql com o nome de sua preferência

# clone o repositório
git clone https://github.com/pcoliveira98/teste-backend-evacommerce

# entre na pasta do projeto e substitua o nome do arquivo ".env.example" para apenas ".env"

# entre nesse mesmo arquivo ".env" e configure as variáveis de ambiente de acordo com sua preferência

# execute o comando para a instalar as dependências do projeto
npm install

# execute o comando para criar as tabelas no seu banco de dados
npx sequelize db:migrate

# execute o projeto
npm run start

# recomendo que utilize o postman para testar as rotas e enviar os dados em JSON
```

# Observações

Quando utilizar as rotas no postman, atente-se no token gerado após o login e envie-o na aba "Authorization" como tipo "Bearer Token". E por fim, quando for cadastrar um produto com imagem na aba "Body", utilize a opção "form-data", pois a opção "raw" não suporta envio de imagens.

# Autor

Paulo César Cintra de Oliveira

https://www.linkedin.com/in/paulo-c%C3%A9sar-cintra-de-oliveira-b31787156/


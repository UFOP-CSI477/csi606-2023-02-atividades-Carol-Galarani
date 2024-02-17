# Projeto Notas

Projeto de exemplo para cadastro, autenticação e gerenciamento de notas usando PostgreSQL, Django, Django Rest Framework, Vue.js, Tailwind CSS e Axios.

## Estrutura do Projeto

- `notes` (App Django para gerenciamento de notas)
- `notesbackend` (Projeto Django)
- `notesfrontend` (Projeto Vue.js)
- `users` (App Django para gerenciamento de usuários)
- `manage.py` (Script de gerenciamento do Django)

## Configuração e Execução

### Backend (Django)

1. Crie um banco de dados PostgreSQL.
2. Atualize as informações de conexão no arquivo `settings.py` dentro da pasta `notsebackend` com o nome do banco de dados e a senha.
3. Instale as dependências Python executando o comando `pip install -r requirements.txt` na raiz do projeto.
4. Execute as migrações do banco de dados com o comando `python manage.py migrate` na raiz do projeto.
5. Inicie o servidor Django com o comando `python manage.py runserver` na raiz do projeto.

### Frontend (Vue.js)

1. Navegue até a pasta `notesfrontend`.
2. Instale as dependências do Node.js executando o comando `npm install`.
3. Inicie o servidor de desenvolvimento com o comando `npm run serve`.

## Funcionalidades

- Cadastro de usuários
- Autenticação de usuários
- Adição, edição e exclusão de notas

## Tecnologias Utilizadas

- PostgreSQL
- Django
- Django Rest Framework
- Vue.js
- Tailwind CSS
- Axios

# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Maria Carolina Galarani Fagunde*

--------------

### Resumo

  Projetada para simplificar o gerenciamento de suas tarefas e compromissos diários.
  O sistema opera com duas entidades principais: "user" e "note". "User" armazena informações essenciais do usuário, incluindo nome, email, senha, data de última atualização e data de criação e a entidade "note" é responsável pelo armazenamento de informações relacionadas aos compromissos e tarefas agendadas. Cada nota é caracterizada por um título, uma descrição detalhada, data de última atualização e data de criação. 

### 1. Funcionalidades implementadas
<!-- Descrever as funcionalidades que eram previstas e foram implementas. -->
- Cadastro de usuários
- Autenticação de usuários
- Adição, edição e exclusão de notas

### 2. Funcionalidades previstas e não implementadas
<!-- Descrever as funcionalidades que eram previstas e não foram implementas, apresentando uma breve justificativa do porquê elas não foram incluídas -->
- Nenhuma prevista deixou de ser implementada

### 3. Outras funcionalidades implementadas
<!-- Descrever as funcionalidades implementas além daquelas que foram previstas, caso se aplique.  -->
- Autenticação de usuarios
### 4. Principais desafios e dificuldades
<!-- Descrever os principais desafios encontrados no desenvolvimento do trabalho, quais foram as dificuldades e como elas foram superadas e resolvidas. -->
- Os desafios do frontend para mim foi uma diculdade por não ter familiaridade. No entanto, com buscas e ajuda de uma pessoa próxima, consegui superar os desafios.

### 5. Instruções para instalação e execução
<!-- Descrever o que deve ser feito para instalar (ou baixar) a aplicação, o que precisa ser configurando (parâmetros, banco de dados e afins) e como executá-la. -->

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

### 6. Referências
<!-- Referências podem ser incluídas, caso necessário. Utilize o padrão ABNT. -->
- Documentação do Django, Tailwind, Vue

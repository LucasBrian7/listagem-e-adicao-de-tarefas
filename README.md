#  Lista de Tarefas - Next.js 15

Projeto desenvolvido como atividade prática da EBAC para colocar em prática os conceitos de **Next.js 15**, **TypeScript** e **testes unitários** utilizando **Jest** e **Testing Library**.

##  Funcionalidades

- Exibição de uma lista de tarefas
- Adição de novas tarefas por meio de formulário
- Contagem automática da quantidade de tarefas utilizando um hook personalizado
- Dados simulados utilizando um array local
- Testes unitários dos principais componentes da aplicação

##  Tecnologias utilizadas

- Next.js 15 (App Router)
- React
- TypeScript
- Jest
- React Testing Library
- Jest DOM

##  Como executar o projeto

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta do projeto:

```bash
cd app
```

Instale as dependências:

```bash
npm install
```

Execute a aplicação:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

##  Executando os testes

Para executar todos os testes:

```bash
npm test
```

Resultado esperado:

```
PASS src/app/tests/useContadorDeTarefas.test.tsx
PASS src/app/tests/Page.test.tsx
PASS src/app/tests/NovaTarefa.test.tsx

Test Suites: 3 passed, 3 total
Tests:       5 passed, 5 total
```

##  Testes implementados

Foram desenvolvidos testes unitários para:

- Componente **NovaTarefa**
  - Renderização dos elementos
  - Validação do input
  - Submissão do formulário

- Hook **useContadorDeTarefas**
  - Retorno correto da quantidade de tarefas

- Página principal
  - Renderização da lista de tarefas
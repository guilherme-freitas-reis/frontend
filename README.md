#  Desafio Localiza

## 🏗 Objetivo do Projeto

Este projeto tem como objetivo apresentar-se como aplicação final dos conhecimentos aprendidos durante o curso da GAMA Academy - como parte do processo de seleção de desenvolvedores front-end da Localiza - e como recurso para a avaliação final. O projeto foi implementado com tecnologias e práticas de desenvolvimento aprendidas durante o curso e que serão listadas abaixo.

### 🏡 Introdução

O projeto:
- Deve ser um site de aluguel de carros - assim como o da Localiza - com simulação do aluguel, baseado nas datas e horários selecionados, carros, com páginas de cadastro e login para o usuário e o operador. Mais detalhes:
  - Reserva baseada em data/horário de retirada
  - Visualização do grupo de carros
  - Login e cadastro
  - Simulação de reserva com preço final
- Deve ter boas noções de UI/UX.
- Deve possuir modularidade e reutilização de componentes

Status de desenvolvimento e acesso:
- O site foi hospedado pela Vercel e;
- Para acessar o site do projeto siga o link: https://localiza.vercel.app/
- Também pode ser clonado pelo repositório no GitHub, instalar as dependências usando yarn, e então rodar no modo de desenvolvedor com yarn run dev

### 🚨 Requisitos de desenvolvimento

O projeto:
- Deve ser desenvolvido usando a biblioteca ReactJS, com as funcionalidades aprendidas no curso (hooks, estilização, requests, etc.);
- Deve ser desenvolvido usando linguagem de programação TypeScript; 
- Utilizou Git para gerenciamento e versionamento de código, com repositório no GitHub;
- Deve usar StoryBook para criar um histórico e visualização dos componentes separadamente;
- Deve usar as funcionalidades do NextJS para geração do website e Server-Side Rendering;
- Deve ser responsivo;
- Deve ter testes com Jest

### 🧷 Dependências utilizadas
- Styled-Components
- Axios para HTTP Requests
- Linter: ESLint
- React DatePicker, Icons, Notifications, 
- Husky para Git Hooks
- Jest para testes
- Editor config para padronização de código entre colaboradores

### 🎁 Extras
- Code Style: ESLint (Airbnb)
- Formato para mensagens de commit (Semantic commits): https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716
- API de carros, reserva, login/cadastro fornecido pelo pessoal do backend

- Mais detalhes ❔

### ❗ TODO
- Adicionar testes
- Bugs conhecidos:
  - Seletor de data de devolução não desabilita datas iguais ou passadas da data de retirada (causa preços negativos)
  - Outros bugs ❔
- Planos de mais features ❔

### 👨‍👨‍👧‍👧 Envolvidos (front-end)
- Filipe Barbosa
- Guilherme Reis
- Lucas Barbosa

# Desafio Kennedy

Bem-vindo à documentação do site desenvolvido para o desafio. Nesta documentação, você encontrará informações sobre como clonar o repositório, configurar e rodar o site localmente, bem como acessar a versão online hospedada.

## Clonando o Repositório

Para obter uma cópia do código-fonte do site, você pode clonar o repositório do GitHub. Siga os passos abaixo:

1. Abra o terminal no seu computador.
2. Execute o seguinte comando para clonar o repositório:

    `$ git clone https://github.com/Raspincel/desafio-kennedy.git`

Isso criará uma pasta chamada desafio-kennedy no diretório atual com todos os arquivos do projeto.

## Rodando o Site Localmente

O site pode ser executado localmente usando Docker Compose ou o gerenciador de pacotes Yarn.

### Docker Compose

Certifique-se de ter o Docker Compose instalado em sua máquina. Se não tiver, você pode instalá-lo seguindo as instruções em: [Instalação do Docker Compose](https://docs.docker.com/compose/install/).

1. No terminal, navegue até a pasta do projeto:

    `$ cd desafio-kennedy`

2. Execute o seguinte comando para iniciar o contêiner e construir a imagem:

    `$ sudo docker-compose up`

3. Após o processo de criação do contêiner e da imagem, você verá um endereço IP no terminal.

4. Abra um navegador da web e insira o endereço IP fornecido para acessar o site.

### Modo de produção

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina. Se não tiver, você pode baixá-los em: [Node.js](https://nodejs.org/en) e [Yarn](https://yarnpkg.com).

1. No terminal, navegue até a pasta do projeto:

    `$ cd desafio-kennedy`

2. Instale as dependências do projeto com o seguinte comando:

    `$ yarn`

3. Faça uma build do projeto com o seguinte comando:

    `$ yarn build`

4. Inicie o servidor de produção com o seguinte comando:

    `$ yarn preview`

5. Abra um navegador da web e acesse o site em [http://localhost:4173](http://localhost:4173).

### Modo de desenvolvedor

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina. Se não tiver, você pode baixá-los em: [Node.js](https://nodejs.org/en) e [Yarn](https://yarnpkg.com).

1. No terminal, navegue até a pasta do projeto:

    `$ cd desafio-kennedy`

2. Instale as dependências do projeto com o seguinte comando:

    `$ yarn`

3. Inicie o servidor de desenvolvimento com o seguinte comando:

    `$ yarn dev`

4. Abra um navegador da web e acesse o site em [http://localhost:5173](http://localhost:5173).

## Acesso à Versão Online

Se você preferir acessar a versão online do site, pode fazê-lo através do seguinte link: [Desafio Kennedy](https://desafio-kennedy.vercel.app).

Esta é uma visão geral básica de como clonar e rodar o site do Desafio Kennedy localmente. Para informações mais detalhadas sobre o funcionamento interno do site, configurações avançadas e outras funcionalidades, consulte o código-fonte e a documentação interna do projeto.

## Ferramentas utilizadas

### Typescript e ESLint
Para qualquer projeto moderno, principalmente aqueles que devem ser desenvolvidos por uma equipe, TypeScript é indispensável. ESLint é um ótimo complemento que ajuda a garantir um código mais consistente e que segue melhores práticas
-   **Finalidade**: Melhoria da qualidade do código e detecção de erros
-   **Utilização**: Tipagem de variáveis, análise estática e sugestões de boas práticas

### CoreUI, Material UI e Styled Components
Styled Components garante grande flexibilidade e facilidade na criação de componentes estilizados e facilmente reutilizáveis, mas em alguns casos, componentes pré-prontos já dão conta do serviço, e daí surge a necessidade de usar bibliotecas como CoreUI e Material UI. Destaque para o modal oferecido pela MUI, que poupou muitas linhas de código.
-   **Finalidade**: Bibliotecas de componentes pré-construídos e criação de novos componentes estilizados facilmente reutilizáveis
-   **Utilização**: Integração dos componentes visuais prontos e criação de componentes estilizados via CSS-in-JS

### Axios
Uma forma simples e prestativa de fazer requisições com React, ideal para acessar a API fornecida.
-   **Finalidade**: Cliente HTTP para comunicação com servidores
-   **Utilização**: Solicitações de dados das ferramentas, criação de novas ferramentas, etc

### Vitest e Testing Library
A combinção de Vitest, Testing Library dentre outras ferramentas é o que permite escrever testes na aplicação, que podem ser rodados com o comando `yarn test`. Simulam a renderização de alguns componentes da aplicação e interações do usuário, apesar de isso ser feito apenas de forma individual (sem e2e)
-   **Finalidade**: Testes automatizados e interação com componentes tal como o usuário interagiria no navegador
-   **Utilização**: Escrita de testes unitários para simular interações do usuário e verificar o comportamento de componentes, além de se renderizam corretamente na tela

### Storybook
Uma forma de desenvolver, testar e documentar componentes isoladamente do resto da aplicação, incluindo documentação automática. É perfeito para entender/demonstrar de forma simples e rápida como cada componente se parece e se comporta
-   **Finalidade**: Plataforma de desenvolvimento de componentes
-   **Utilização**: Criação de componentes em ambiente isolado, desenvolvimento interativo e documentação de diferentes estados
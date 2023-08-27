# Desafio Kennedy

Bem-vindo à documentação do site desenvolvido para o desafio. Nesta documentação, você encontrará informações sobre como clonar o repositório, configurar e rodar o site localmente, bem como acessar a versão online hospedada.

## Clonando o Repositório

Para obter uma cópia do código-fonte do site, você pode clonar o repositório do GitHub. Siga os passos abaixo:

1. Abra o terminal no seu computador.
2. Execute o seguinte comando para clonar o repositório:

    git clone https://github.com/Raspincel/desafio-kennedy.git

Isso criará uma pasta chamada desafio-kennedy no diretório atual com todos os arquivos do projeto.

## Rodando o Site Localmente

O site pode ser executado localmente usando Docker Compose ou o gerenciador de pacotes Yarn.

### Docker Compose

Certifique-se de ter o Docker Compose instalado em sua máquina. Se não tiver, você pode instalá-lo seguindo as instruções em: [Instalação do Docker Compose](https://docs.docker.com/compose/install/).

1. No terminal, navegue até a pasta do projeto:

    cd desafio-kennedy

2. Execute o seguinte comando para iniciar o contêiner e construir a imagem:

    sudo docker-compose up

3. Após o processo de criação do contêiner e da imagem, você verá um endereço IP no terminal.

4. Abra um navegador da web e insira o endereço IP fornecido para acessar o site.

### Yarn

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina. Se não tiver, você pode baixá-los em: Node.js e Yarn.

1. No terminal, navegue até a pasta do projeto:

    cd desafio-kennedy

2. Instale as dependências do projeto com o seguinte comando:

    yarn

3. Inicie o servidor de desenvolvimento com o seguinte comando:

    yarn dev

4. Abra um navegador da web e acesse o site em http://localhost:5173.

## Acesso à Versão Online

Se você preferir acessar a versão online do site, pode fazê-lo através do seguinte link: [Desafio Kennedy](https://desafio-kennedy.vercel.app).

Esta é uma visão geral básica de como clonar e rodar o site do Desafio Kennedy localmente. Para informações mais detalhadas sobre o funcionamento interno do site, configurações avançadas e outras funcionalidades, consulte o código-fonte e a documentação interna do projeto.

# Projeto-base React do TST

Este projeto foi criado usando o [Create React App](https://github.com/facebook/create-react-app).

## O que está incluído nesse projeto

- `es-lint` – configurações;
- `Prettier` – instalado;
- `material-ui` – instalado com alguns poucos componentes criados;
- `storybook` – instalado e customizado;

## Como contribuir?

Por enquanto, crie uma [issue](https://github.com/tst-labs/react-starter/issues) no projeto e seguimos daí...

## Variáveis de Ambiente

Variáveis de ambiente são definidas no arquivo [env.js](src/utils/env.js). Os valores _default_ podem ser sobrescritos em tempo de construção ou de execução usando a imagem **Docker** `tstlabs/frontend:latest`.

### Sobrescrevendo em tempo de desenvolvimento

Crie um um arquivo de propriedades no diretório raiz com o nome `.env`.

Sobrescreva as variáveis de ambiente que deseja prefixando-as com `FRONTEND_ENV_`. Use o arquivo `.env.exemple` com referência.

Exemplos:

```
FRONTEND_ENV_TIPO_AMBIENTE=homologacao
FRONTEND_ENV_SERVICE_URL=http://my-service.dev.rede.tst
```

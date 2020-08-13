# Simple React starter project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What's included

- `es-lint` configurations;
- `Prettier` installed;
- `material-ui` installed;
- `storybook` installed and customized;

## How to contribute?

Just create an [issue](https://github.com/tst-labs/react-starter/issues) and we go from there...

## Environment variables

Environment variables are defined in file [env.js](src/utils/env.js). The default values can be overwritten at build time or at runtime using `tstlabs/frontend:latest` Docker image.

### Overwriting at development time

Create a properties file in the root folder with name `.env`

Overwrite the desired environment variables using `FRONTEND_ENV_` prefix. Use the file `.env.example` as reference.

Examples:

```
FRONTEND_ENV_TIPO_AMBIENTE=homologacao
FRONTEND_ENV_SERVICE_URL=http://my-service.dev.rede.tst
```

## License

Simple: MIT

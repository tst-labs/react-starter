import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import ButtonAppBar from './layout/app-bar';
import './app.css';
import { EXEMPLO } from '../utils/env';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <div style={{ gridColumnEnd: 'span 12' }}>
          <ButtonAppBar></ButtonAppBar>
        </div>
        <div style={{ gridColumnEnd: 'span 12' }}>
          <Container
            maxWidth="sm"
            style={{
              backgroundColor: '#cfe8fc',
              height: '100%',
              textAlign: 'center',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Área central da aplicação
            </Typography>
            <a
              href="https://www.tst.jus.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="h6" gutterBottom>
                Conheça o TST
              </Typography>
            </a>
            <Typography>Variável de ambiente exemplo: {EXEMPLO}</Typography>
            <Typography variant="caption">
              Crie uma variável de ambiente com o nome "FRONTEND_ENV_EXEMPLO" ou
              use um arquivo ".env" na raiz do projeto. Reinicie a aplicação
              após a alteração.
            </Typography>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

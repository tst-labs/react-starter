import React from 'react';
import ButtonAppBar from './app-bar';

export default {
  title: 'ButtonAppBar – Barra da Aplicação',
  parameters: {
    component: ButtonAppBar,
    componentSubtitle:
      'Exibe uma barra principal para a aplicação com avatar ou botão de login.',
  },
};

export const simpleAppBar = () => <ButtonAppBar></ButtonAppBar>;

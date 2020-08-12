export const EXEMPLO = getEnv('EXEMPLO', 'Valor padrao');

function getEnv(envName, defaultValue) {
  if (!window.env) {
    window.env = {};
  }

  if (window.env[envName] == null) {
    window.env[envName] = defaultValue;
  }

  return window.env[envName];
}

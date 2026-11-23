import { useState } from 'react';
import Menu from './telas/menu';
import Cadastro from './Login/cadastro';
import Login from './Login/log';

export default function App() {
  const [telaLogin, setTelaLogin] = useState(true);
  const [loginok, setLoginOk] = useState(false);

  if (loginok) {
    return (
      <Menu
        setTelaLogin={setTelaLogin}
        setLoginOk={setLoginOk}
      />
    );
  }

  if (telaLogin) {
    return (
      <Login
        setTelaLogin={setTelaLogin}
        setLoginOk={setLoginOk}
      />
    );
  }

  return (
    <Cadastro setTelaLogin={setTelaLogin} />
  );
}
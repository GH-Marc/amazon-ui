import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import './styles.css';

function Login() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = e => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      if (auth) {
        history.push('/')
      }
    }).catch(error => alert(error.message))
  }

  const signIn = e => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      history.push('/')
    }).catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="login_logo"
        />
      </Link>

      <div className="login__container">
        <h1>Criar conta</h1>

        <form>
          <h5>Seu nome</h5>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}          
          />

          <h5>Senha</h5>
          <input
            type="password"
            placeholder="Pelo menos 6 caracteres"
            value={password}
            onChange={e => setPassword(e.target.value)}          
          />

          <button
            type="submit"
            onClick={register}
            className="login__registerButton"
          >
            Criar sua conta da Amazon
          </button>
        </form>

        <p>Ao criar uma conta, você concorda com as Condições de Uso da Amazon Clone. Por favor verifique a Notificação de Privacidade, Notificação de Cookies e a Notificação de Anúncios Baseados em Interesse.</p>

        <div className="login_signIn">
          <p>Você já tem uma conta?</p>

          <a
            onClick={signIn}
            className="login__signIn"
            href="/"
          >
            Fazer login
          </a>
        </div>
      </div>

      
    </div>
  );
}

export default Login;
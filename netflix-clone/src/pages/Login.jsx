import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateCredentials = async (email, password) => {
    try {
      const response = await fetch('/users.json');
      const users = await response.json();

      const user = users.find(user => user.email === email && user.password === password);

      return user !== undefined;
    } catch (error) {
      console.error('Erro ao verificar credenciais:', error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateCredentials(email, password);

    if (isValid) {
      navigate('/Home');
    } else {
      setError('Por favor, insira um email e senha válidos');
    }
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1>Entrar</h1>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type="password" 
            placeholder="Senha" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button type="submit">Entrar</button>
          <div className="or-divider">OU</div>
          <button type="button" className="access-code-button">Usar um código de acesso</button>
          <a href="#">Esqueceu a senha?</a>
          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Lembre-se de mim</label>
          </div>
          <a href="#">Novo por aqui? <strong>Assine agora.</strong></a>
        </form>
      </div>
      <footer className="footer">
  <div className="footer-content">
    <p>Dúvidas? Ligue 0800 591 2876</p>
    <div className="footer-links">
      <div className="first-line">
        <a href="#">Perguntas frequentes</a>
        <a href="#">Central de Ajuda</a>
        <a href="#">Termos de Uso</a>
        <a href="#">Privacidade</a>
      </div>
      <div className="second-line">
        <a href="#">Preferências de cookies</a>
        <a href="#">Informações corporativas</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Login;

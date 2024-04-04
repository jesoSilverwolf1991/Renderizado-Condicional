import React, { useState } from 'react';

function LoginForm() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
 
    console.log('Iniciando sesión con:', email, password);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
 
    console.log('Registrando con:', name, email, password);
  };

  return (
    <div style={{backgroundColor: 'green', padding: '60px', borderRadius: '10px', width: '350px', margin: 'auto'}}>
      {isLoggedIn ? (
        <form onSubmit={handleRegisterSubmit} style={{color: 'white'}}>
          <h2>Registro</h2>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Registrar</button>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit} style={{color: 'white'}}>
          <h2>Iniciar Sesión</h2>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
           <h2>Contraseña</h2>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      )}
    </div>
  );
}

export default LoginForm;

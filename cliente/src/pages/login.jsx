import React from 'react';

export function login() {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
}


import React from 'react';

function Saludo({ nombre }) {
  return (
    <div className='grid justify-center text-[30px] font-thin text-white bg-blue-950 m-5'>
      {nombre ? (
        <h1>Hola, {nombre}!</h1>
      ) : (
        <h1>Hola, Invitado!</h1>
      )}
    </div>
  );
}

export default Saludo;

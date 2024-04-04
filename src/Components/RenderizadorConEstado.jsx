import React, { useState } from 'react';


const ComponenteA = () => {
  return <h2 className='m-5'>Componente A</h2>;
};


const ComponenteB = () => {
  return <h2 className='m-5'>Componente B</h2>;
};


const RenderizadoCondicional = () => {

  const [mostrarComponenteA, setMostrarComponenteA] = useState(true);

  
  const alternarComponente = () => {
    setMostrarComponenteA(!mostrarComponenteA);
  };

  return (
    <div className='m-5 p-5 grid justify-center border-4 border-black w-[300px] font-bold bg-red-200 rounded-lg'>
      <button  onClick={alternarComponente}>
        Alternar Componente
      </button>
      {mostrarComponenteA ? <ComponenteA /> : <ComponenteB />}
    </div>
  );
};

export default RenderizadoCondicional;

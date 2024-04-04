import React, { useState } from 'react';

function ModoOscuroClaro() {
  const [modoOscuro, setModoOscuro] = useState(false);

  const toggleModo = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div style={{ backgroundColor: modoOscuro ? '#333' : '#fff', color: modoOscuro ? '#fff' : '#333', minHeight: '100vh', padding: '20px', textAlign:'center', fontSize:'30px' }}>
      <h1>Modo {modoOscuro ? 'Oscuro' : 'Claro'}</h1>
      <p>¡Haz clic en el botón para alternar entre el modo oscuro y claro!</p>
      <button onClick={toggleModo}>Alternar Modo</button>
    </div>
  );
}

export default ModoOscuroClaro;

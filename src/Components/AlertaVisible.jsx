import React, { useState } from 'react';

function AlertaVisible() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='grid justify-center'>
      <button className='border-4 border-black w-200' onClick={() => setIsVisible(true)}>Mostrar Alerta</button>
      {isVisible && (
        <div style={{ backgroundColor: 'Blue', padding: '20px', margin: '10px 0', color:'white', font:'bold' }}>
          Esta es una alerta visible.
          <button onClick={() => setIsVisible(false)} style={{ marginLeft: '10px' }}>
            Cerrar
          </button>
        </div>
      )}
    </div>
  );
}

export default AlertaVisible;
import React from 'react';

function ListaDeTareas({ tareas }) {
  return (
    <div className='grid justify-center border-4 border-black w-[150px] m-5'>
        <h1 className='p-5 m-5 font-bold'>Lista de tareas</h1>
      {tareas.length > 0 ? (
        <ul>
          {tareas.map((tarea, index) => (
            <li className='p-5 m-5 underline ' key={index}>{tarea}</li>
          ))}
        </ul>
      ) : (
        
        <p>No hay tareas</p>
      )}
    </div>
  );
}

export default ListaDeTareas;

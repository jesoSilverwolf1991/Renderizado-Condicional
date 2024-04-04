import React from 'react';

const ErrorMessage = ({ error }) => {
  if (!error) {
    return null; 
  }

  return (
    <div className="error-message font-bold border-4 border-black text-[50px] w-[200px] m-5  bg-yellow-400 grid justify-center cursor-pointer">
      {error}
    </div>
  );
};

export default ErrorMessage;

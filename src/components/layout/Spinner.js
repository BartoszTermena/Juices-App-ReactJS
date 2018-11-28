import React from 'react';
import spinner from './spinner.gif';

export default () => {
  return (
    <div>
      <img 
        src={spinner}
        alt="Lodaing..."
        style={{ width: '300px', margin: '50px auto', display: 'block'}}
        />
    </div>
  );
};

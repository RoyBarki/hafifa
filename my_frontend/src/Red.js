import React from 'react';

function Red() {
  const style = {
    backgroundColor: 'red',
    color: 'white',
    height: '100vh',      // full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '100px',    // big text
    fontWeight: 'bold'
  };

  return (
    <div style={style}>
      Red
    </div>
  );
}

export default Red;
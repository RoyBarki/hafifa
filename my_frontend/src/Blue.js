import React from 'react';

function Blue() {
  const style = {
    backgroundColor: 'blue',
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
      BLUE
    </div>
  );
}

export default Blue;
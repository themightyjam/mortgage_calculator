import React from 'react';

function Application({ name, children }) {
  return (
    <div className="application">
      <h4>{name}</h4>
      <p>{children}</p>
    </div>
  );
}

export default Application;

import React from 'react';

export default function Resultado (props) 
{
  const { character1, character2 } = props.location.state;
  return(
    <div>
      <h1>resultado</h1>
      <p>{character1}</p>
      <p>{character2}</p>
    </div>

  )
}
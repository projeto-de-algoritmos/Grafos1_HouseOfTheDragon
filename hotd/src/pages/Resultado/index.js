import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export default function Resultado (props) 
{
  const history = useHistory();
  const { characters } = props.location.state;

  React.useEffect(() => {
    if (!characters?.length === 2) {
      history?.push("/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characters]);

  return(
    <div className="page">
      <h1>resultado</h1>
      {characters.map((item) => <p key={item?.name}>{item?.name}</p>)}
      {characters?.length === 2 ? (
        <Link to={{ pathname: "/", state: { characters } }} className="btn">
          VOLTAR
        </Link>
      ) : null}
    </div>
  )
}

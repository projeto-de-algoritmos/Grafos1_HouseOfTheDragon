import { useState } from 'react';
import { Link } from 'react-router-dom';
import familytree from '../../utils/familytree';

import imgTargaryen from '../../assets/targaryen.jpeg';

import './styles.css';

export default function Home(props) {
  const state = props?.location?.state || {};
  const [characters, setCharacters] = useState(state?.characters || []);

  function chooseCharacter(item) {
    // entra no if caso o item ja esteja na lista
    if (characters.some((character) => character === item)) {
      // passa para uma variavel nova a lista de caracteres filtrada
      const updatedCharacters = characters.filter(
        // o filtro mantém no array apenas aqueles que são diferentes do item atual
        (character) => character !== item
      );
      // seta os characters usando o valor do array filtrado
      setCharacters(updatedCharacters);
      return;
    }

    if (characters.length === 2) {
      // caso já hajam dois items na lista ele remove o que foi colocado primeiro
      // e adiciona o novo item que foi clicado.
      setCharacters([characters[1], item]);
      return;
    }

    setCharacters([...characters, item]);
  }

  return (
    <div className='page'>
      <h1>House of The Dragon Connections</h1>
      <p className='description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className='familytree-container'>
        {familytree.map((item) => (
          <button
            onClick={() => chooseCharacter(item)}
            className={`familytree-item ${
              characters.some((character) => character === item) ? 'active' : ''
            }`}
            key={item.name}
          >
            <img src={item.picture || imgTargaryen} alt='' />
            <p>{item.name}</p>
          </button>
        ))}
      </div>
      {characters?.length === 2 ? (
        <Link to={{ pathname: '/resultado', state: { characters } }} className='btn'>
          resultado
        </Link>
      ) : null}
    </div>
  );
}

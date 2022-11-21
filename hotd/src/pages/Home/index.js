import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import familytree from '../../utils/familytree'
import './styles.css';

export default function Home() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => { console.log(characters) }, [characters]);

  return (
    <div className='page'>
      <h1>home</h1>
      <Link to={{ pathname: '/resultado', state: { character1: 'daemon' } }}>resultado</Link>
      <div className='familytree-container'>
        {familytree.map((item) => <button onClick={() => { 
          if(characters.some((character) => character === item))
          {
            
          }
          if(characters.length === 2) 
          {

          }
          setCharacters([...characters, item]) }} 
          className={`familytree-item ${characters.some((character) => character === item)?'active':''}`} key={item.name}>
          <img src={item.picture} alt='' />
          <p>{item.name}</p>
        </button>)}
      </div>
    </div>
  )
}

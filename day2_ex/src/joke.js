import react from 'react';
import{ useState, useEffect } from 'react';

export const Joke = () => {
    const [joke, setJoke] = useState("");

    return (
        <div>
          <button onClick={() => {
            fetch('https://api.chucknorris.io/jokes/random').then(res => res.json())
            .then(data => {
              setJoke(data.value);
            })
          }}>
           joke
          </button>
          <p>{joke}</p>
        </div>
    
      )
    }
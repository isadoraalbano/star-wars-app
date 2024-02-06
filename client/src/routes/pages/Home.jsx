import React from 'react'
import {  Link } from 'react-router-dom';

function Home(){
    return(
        <div className="container">
            <div className="image-container">
                <img src="/src/assets/yoda.png" alt="Imagem" />
            </div>
            <div className="buttons-container">
                <Link to="/characters">
                    <button>Characters</button>
                </Link>
                <Link to="/films">
                    <button>Films</button>
                </Link>
                <Link to="/starships">
                    <button>Starships</button>
                </Link>
                <Link to="/planets">
                    <button>Planets</button>
                </Link>
            </div>
      </div>



    //   <div style={{ textAlign: 'center', marginTop: '50px' }}>
    //     <Link to="/list">
    //       <button>Films</button>
    //     </Link>
    //   </div>

    )
}
export default Home
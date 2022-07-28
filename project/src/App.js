import React from 'react';
import Logo from './assets/Logo.png'
import Arrow from './assets/Arrow.png'
import FotoOne from './assets/People01.png'
import FotoTwo from './assets/People02.png'
import FotoThree from './assets/People03.png'
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <section className="Container_Nav">
          <img src={Logo} className="Logo" />
          <div className="Container_Menu">
            <p>HOME</p>
            <p>TEAM</p>
            <p>TOPICS</p>
            <p>CONTACT</p>
          </div>
        </section>
        <section className='Container_Card'>
          <p className='Title'>CHECK THE TOP 10 INTERIORS OF THE WEEK.</p>
          <p className='Txt'>our team of architects and designers has put together a selection of the best interiors of the week.</p>
          <div className='Container_Arrow'>
            <img src={Arrow} className="Arrow" />
          </div>
        </section>
      </header>
      <body>
        <h1 className='Title_Team'>MEET OUR TEAM</h1>
        <section className='Team'>
          <div className='People01'>
            <img src={FotoOne} />
            <p></p>
            <p></p>
            <button>See Profile</button>
          </div>
          <div className='People02'>
            <img src={FotoTwo} />
            <p></p>
            <p></p>
            <button>See Profile</button>
          </div>
          <div className='People03'>
            <img src={FotoThree} />
            <p></p>
            <p></p>
            <button>See Profile</button>
          </div>
        </section>
      </body>
    </>
  );
}

export default App;



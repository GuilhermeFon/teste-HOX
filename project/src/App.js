import React from 'react';
import Logo from './assets/Logo.png'
import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <section className="Container_Nav">
          <img src={Logo} className="Logo"/>
          <div className="Container_Menu">
            <p>HOME</p>
            <p>TEAM</p>
            <p>TOPICS</p>
            <p>CONTACT</p>
          </div>
        </section>
        <section className='Container_Card'>
          
        </section>
      </header>
    </>
  );
}

export default App;

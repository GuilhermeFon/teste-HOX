import React from 'react';

import Arrow from '../images/Arrow.png';
import Logo from '../images/Logo.png';

export default () => {

  return (

    <>
      <section className="App-header">
        <div className="Container_Nav">
          <img src={Logo} className="Logo" alt='Logo'/>
          <div className="Container_Menu">
            <p>HOME</p>
            <p>TEAM</p>
            <p>TOPICS</p>
            <p>CONTACT</p>
          </div>
        </div>
        <div className='Container_Card'>
          <p className='Title'>CHECK THE TOP 10 INTERIORS OF THE WEEK.</p>
          <p className='Txt'>our team of architects and designers has put together a selection of the best interiors of the week.</p>
          <div className='Container_Arrow'>
            <img src={Arrow} className="Arrow" alt='Arrow'/>
          </div>
        </div>
      </section>
    </>
  )
}


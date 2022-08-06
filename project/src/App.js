import React from 'react';
import Swiper from './assets/Swiper';
import Logo from './assets/images/Logo.png'
import Arrow from './assets/images/Arrow.png'
import FotoOne from './assets/images/People01.png'
import FotoTwo from './assets/images/People02.png'
import FotoThree from './assets/images/People03.png'

import './App.css';

function App() {


  return (
    <>
      <header className="App-header">
        <section className="Container_Nav">
          <img src={Logo} className="Logo" />
          <div className="Container_Menu">
            <p onClick={App.js}>HOME</p>
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
      <section>
        <h1 className='Title_Team'>MEET OUR TEAM</h1>
        <section className='Team'>
          <div className='People'>
            <img src={FotoOne} />
            <p className='p1'>Jack Gosling</p>
            <p className='p2'>Senior Designer</p>
            <button className='btn_profile'>See Profile</button>
          </div>
          <div className='People'>
            <img src={FotoTwo} />
            <p className='p1'>Thomas Carlson</p>
            <p className='p2'>Interior Expert</p>
            <button className='btn_profile'>See Profile</button>
          </div>
          <div className='People'>
            <img src={FotoThree} />
            <p className='p1'>Sophia Dellphine</p>
            <p className='p2'>Midia Expert</p>
            <button className='btn_profile'>See Profile</button>
          </div>
        </section>
        <section className='Container_three'>
          <div className='Container_Topics'>
            <h2>TOPICS</h2>
            <a>See all topics</a>
          </div>
          <div>
            <Swiper />
          </div>
        </section>
      </section>
      <section className='Container_Four'>
        <div className='Container_txt_Four'>
          <h1>CONTACT OUR TEAM FOR MORE INFORMATION ABOUT INTERIOR DESIGN.</h1>
          <div className="Container_Form">
              <input type="text" placeholder='Your name' id='name' autoComplete='off'/>
              <input type="email" placeholder='Your best Email' id='email' autoComplete='off'/>
              <textarea name="message_txt" id="message" cols="30" rows="10" placeholder='How Can We help you :)?'></textarea>
              <button type="submit">Send</button>
          </div>
        </div>
        <div className="Footer">
          <p>interiors.cc - 2021</p>
          <p>All rights reserved</p>
        </div>
      </section>
    </>
  );
}

export default App;
import React from 'react';
import ReactSwipe from 'react-swipe';
// import Carousel from './assets/Carousel'
import Logo from './assets/Logo.png'
import Arrow from './assets/Arrow.png'
import FotoOne from './assets/People01.png'
import FotoTwo from './assets/People02.png'
import FotoThree from './assets/People03.png'
import './App.css';


function App() {
  
  let reactSwipeEl;

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
          <div className='Container_Carousel'>
            <div>
              <ReactSwipe
                className="carousel"
                swipeOptions={{ continuous: false }}
                ref={el => (reactSwipeEl = el)}>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
              </ReactSwipe>
              <button onClick={() => reactSwipeEl.next()}>Next</button>
              <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
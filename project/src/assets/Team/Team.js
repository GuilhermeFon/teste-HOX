import React from "react";

import FotoOne from '../images/People01.png'
import FotoTwo from '../images/People02.png'
import FotoThree from '../images/People03.png'


export default () => {

  return (
    <>
      <section>
        <h1 className='Title_Team'>MEET OUR TEAM</h1>
        <div className='Team'>
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
        </div>
      </section>
    </>
  )
}
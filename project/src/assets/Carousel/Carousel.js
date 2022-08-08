import React from "react";

import Swiper from "./Swiper";

export default () => {

  return (
    <>
      <section className='Container_three'>
        <div className='Container_Topics'>
          <h2>TOPICS</h2>
          <a>See all topics</a>
        </div>
        <div>
          <Swiper />
        </div>
      </section>
    </>
  )
}
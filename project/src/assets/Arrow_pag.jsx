import { React } from 'react';
import { useSwiper } from 'swiper/react';
import Prev from './images/Prev.png'
import Next from './images/Next.png'

export default function SlideNextButton() {

  const swiper = useSwiper();

  return (
    <>
    <div className="Container_btn">
      <button onClick={() => swiper.slidePrev()}>
        <img src={Prev}></img>
      </button>
      <button onClick={() => swiper.slideNext()} className="Carousel_btn">
        <img src={Next}></img>
      </button>
      </div>
    </>
  );
}
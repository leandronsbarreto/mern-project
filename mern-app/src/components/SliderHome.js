/* eslint-disable no-undef */
import Slider from 'react-slick';
import dataCarousel from '../data/dataCarouselHome.json';

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true
  };
  return (
    <>
      <Slider {...settings}>
        <img
          className='photo'
          src={process.env.PUBLIC_URL + '/images/julie-ricard-small.jpg'}
          alt={dataCarousel.img1.alt}
          title={dataCarousel.img1.author}
        />
        <img
          className='photo'
          src={process.env.PUBLIC_URL + '/images/ev-small.jpg'}
          alt={dataCarousel.img2.alt}
          title={dataCarousel.img2.author}
        />
        <img
          className='photo'
          src={process.env.PUBLIC_URL + '/images/moises-gonzalez-small.jpg'}
          alt={dataCarousel.img3.alt}
          title={dataCarousel.img3.author}
        />
        <img
          className='photo'
          src={process.env.PUBLIC_URL + '/images/jonathan-ramalho-small.jpg'}
          alt={dataCarousel.img4.alt}
          title={dataCarousel.img4.author}
        />
        <img
          className='photo'
          src={process.env.PUBLIC_URL + '/images/kevin-buckert-small.jpg'}
          alt={dataCarousel.img5.alt}
          title={dataCarousel.img5.author}
        />
      </Slider>
    </>
  );
};

export default Carousel;

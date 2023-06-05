/* eslint-disable no-undef */
import Slider from 'react-slick';

const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    pauseOnHover: true,
    swipeToSlide: true
  };
  return (
    <div className='slider'>
      <Slider {...settings}>
        <div className='containerPhoto'>
          <img
            className='photo'
            src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
          />
        </div>
        <div className='containerPhoto'>
          <img
            className='photo'
            src={process.env.PUBLIC_URL + '/images/julie-ricard-small.jpg'}
          />
        </div>
        <div className='containerPhoto'>
          <img
            className='photo'
            src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
          />
        </div>
        <div className='containerPhoto'>
          <img
            className='photo'
            src={process.env.PUBLIC_URL + '/images/julie-ricard-small.jpg'}
          />
        </div>
        <div className='containerPhoto'>
          <img
            className='photo'
            src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
          />
        </div>
        <div className='containerPhoto'>
          <img
            className='photo'
            src={process.env.PUBLIC_URL + '/images/julie-ricard-small.jpg'}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;

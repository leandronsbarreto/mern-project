/* eslint-disable no-undef */
import styleContent from '../styles/styleContent';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';
// import { useEffect } from 'react';
import Carousel from './Slider';
import { SlArrowRightCircle } from 'react-icons/sl';

const Content = () => {
  //Events
  /*   useEffect(() => {
    const allWithClassRightCircle = Array.from(
      document.getElementsByClassName('arrowRightCircle')
    );
    console.log('I am working');
    allWithClassRightCircle.forEach(el => {
      el.addEventListener('mouseover', () => {
        el.style.backgroundColor = 'var(--gray)';
        el.style.borderRadius = '50%';
      });
      allWithClassRightCircle.forEach(el => {
        el.addEventListener('mouseout', () => {
          el.style.backgroundColor = 'transparent';
        });
      });
    });
  }, []); */

  /*   useEffect(() => {
    const arrowPrevious = document.querySelector('.slick-arrow.slick-prev');
    const arrowNext = document.querySelector('.slick-arrow.slick-next');
    arrowPrevious.addEventListener('click', () => {
      arrowPrevious.style.backgroundColor = 'var(--gray)';
    });
  }, []); */

  const handlePage = e => {
    let id = e.target.id;
    id == 'news'
      ? window.open(`http://localhost:3000/articles`)
      : window.open(`http://localhost:3000/${id}`);
  };

  //Media queries
  const isVerySmall = useMediaQuery({ query: '(max-width: 284px)' });
  const isMobile = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 480px)'
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  });

  return (
    <>
      {/* Up to 284px, Portrait and Landscape */}
      {isVerySmall && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImgVerySmall}>
            {Carousel()}
          </div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTopLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.about}</div>
                  <div
                    id='about'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxTopRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.altInvolvedImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.involved}</div>
                  <div
                    id='getinvolved'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.altNewsImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.news}</div>
                  <div
                    id='news'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxBottomRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.altDonateImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.donate}</div>
                  <div
                    id='donate'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Mobile devices, Portrait and Landscape*/}
      {isMobile && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImgMobile}>{Carousel()}</div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTopLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.altAboutImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.about}</div>
                  <div
                    id='about'
                    style={styleContent.arrow}
                    onClick={handlePage}
                    className='arrowRightCircle'
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxTopRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.altInvolvedImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.involved}</div>
                  <div
                    id='getinvolved'
                    style={styleContent.arrow}
                    onClick={handlePage}
                    className='arrowRightCircle'
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.altNewsImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.news}</div>
                  <div
                    id='news'
                    style={styleContent.arrow}
                    onClick={handlePage}
                    className='arrowRightCircle'
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxBottomRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.altDonateImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.donate}</div>
                  <div
                    id='donate'
                    style={styleContent.arrow}
                    onClick={handlePage}
                    className='arrowRightCircle'
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* iPads, tablets, Portrait and Landscape*/}
      {isTablet && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImgMobile}>{Carousel()}</div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTopLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.altAboutImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.about}</div>
                  <div
                    id='about'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxTopRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.altInvolvedImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.involved}</div>
                  <div
                    id='getinvolved'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.altNewsImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.news}</div>
                  <div
                    id='news'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxBottomRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.altDonateImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.donate}</div>
                  <div
                    id='donate'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    <SlArrowRightCircle />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Content;

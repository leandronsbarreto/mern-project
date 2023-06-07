/* eslint-disable no-undef */
import styleContent from '../styles/styleContent';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
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

  //This code refers to all buttons with SVG images of the home page.
  //By hitting one of the buttons, client will be redirected to other pages or websites.
  useEffect(() => {
    const arrayButtonsSvg = Array.from(document.querySelectorAll('.buttonSvg'));
    console.log(arrayButtonsSvg);
    arrayButtonsSvg.forEach(el => {
      el.addEventListener('click', e => {
        let currentTargetId = e.currentTarget.id;
        if (currentTargetId === 'instagram') {
          window.open(`http://www.instagram.com`);
        } else if (currentTargetId === 'facebook') {
          window.open(`http://www.facebook.com`);
        } else if (currentTargetId === 'twitter') {
          window.open(`http://www.twitter.com`);
        } else if (currentTargetId === 'youtube') {
          window.open(`http://www.youtube.com`);
        } else if (currentTargetId === 'linkedin') {
          window.open(`http://www.linkedin.com`);
        } else {
          window.open(`http://localhost:3000/${currentTargetId}`);
        }
      });
    });
  }, []);

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
            <div style={styleContent.testanto}>Teste</div>
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
                  <button
                    className='buttonSvg'
                    id='about'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='getinvolved'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='articles'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='donate'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Mobile devices, Portrait and Landscape*/}
      {isMobile && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImgMobile}>
            <div style={styleContent.testanto}>Teste</div>
          </div>
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
                  <button
                    className='buttonSvg'
                    id='about'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='getinvolved'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='articles'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='donate'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* iPads, tablets, Portrait and Landscape*/}
      {isTablet && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImgMobile}>
            <div style={styleContent.innerBoxMain}>
              <img
                style={styleContent.imgInnerBoxMain}
                src={process.env.PUBLIC_URL + '/images/emre-tazegul.jpg'}
              />
            </div>
            <div style={styleContent.innerBoxMain}>
              <div style={styleContent.testanto}>
                <div style={styleContent.testanto2}>
                  <h1>
                    Let&apos;s make <br /> the difference!
                  </h1>
                </div>
              </div>
            </div>
          </div>
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
                  <button
                    className='buttonSvg'
                    id='about'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='getinvolved'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='articles'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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
                  <button
                    className='buttonSvg'
                    id='donate'
                    style={styleContent.arrow}
                  >
                    <SlArrowRightCircle />
                  </button>
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

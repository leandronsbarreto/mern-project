/* eslint-disable no-undef */
import styleContentSmallDevices from '../styles/styleContentSmallDevices';
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

  //This code refers to all buttons with SVG images in the home page.
  //useEffect will run after first render.
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
          window.open(`http://localhost:3000/${currentTargetId}`, '_self');
        }
      });
    });
  }, []);

  //Media queries
  /*   const beforeVerySmal = useMediaQuery({ query: '(max-width: 190px)' }); */
  const isVerySmall = useMediaQuery({
    query: '(min-width: 191px) and (max-width: 284px)'
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 480px)'
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });

  return (
    <>
      {/* Very small, Portrait*/}
      {isVerySmall && isPortrait && (
        <main style={styleContentSmallDevices.containerContentVerySmall}>
          <div style={styleContentSmallDevices.containerCoverImgVerySmall}>
            <div style={styleContentSmallDevices.innerBoxMainVerySmall}>
              <img
                style={styleContentSmallDevices.imgInnerBoxMainVerySmall}
                src={process.env.PUBLIC_URL + '/images/emre-tazegul.jpg'}
                alt={data.home.mainContent.altCoverImg}
                title={data.home.mainContent.titleCoverImg}
              />
            </div>
            <div style={styleContentSmallDevices.innerBoxMainVerySmall}>
              <div style={styleContentSmallDevices.backgroundBoxVerySmall}>
                <div style={styleContentSmallDevices.foregroundBoxVerySmall}>
                  <h2>
                    Let&apos;s make <br /> the difference!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div style={styleContentSmallDevices.menuBoxVerySmall}>
            <div style={styleContentSmallDevices.menuSubBoxTopVerySmall}>
              <div style={styleContentSmallDevices.insideSubBoxTopLeft}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.about}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit about page'
                    id='about'
                    style={styleContentSmallDevices.arrowVerySmall}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
              <div style={styleContentSmallDevices.insideSubBoxTopRight}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.involved}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit get involved page'
                    id='getinvolved'
                    style={styleContentSmallDevices.arrowVerySmall}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div style={styleContentSmallDevices.menuSubBoxBottomVerySmall}>
              <div style={styleContentSmallDevices.insideSubBoxBottomLeft}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.news}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit articles page'
                    id='articles'
                    style={styleContentSmallDevices.arrowVerySmall}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
              <div style={styleContentSmallDevices.insideSubBoxBottomRight}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.donate}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit donate page'
                    id='donate'
                    style={styleContentSmallDevices.arrowVerySmall}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Mobile devices, Portrait*/}
      {isMobile && isPortrait && (
        <main style={styleContentSmallDevices.containerContent}>
          <div style={styleContentSmallDevices.containerCoverImgMobile}>
            <div style={styleContentSmallDevices.innerBoxMain}>
              <img
                style={styleContentSmallDevices.imgInnerBoxMain}
                src={process.env.PUBLIC_URL + '/images/emre-tazegul.jpg'}
                alt={data.home.mainContent.altCoverImg}
                title={data.home.mainContent.titleCoverImg}
              />
            </div>
            <div style={styleContentSmallDevices.innerBoxMain}>
              <div style={styleContentSmallDevices.backgroundBox}>
                <div style={styleContentSmallDevices.foregroundBox}>
                  <h2>
                    Let&apos;s make <br /> the difference!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div style={styleContentSmallDevices.menuBox}>
            <div style={styleContentSmallDevices.menuSubBoxTop}>
              <div style={styleContentSmallDevices.insideSubBoxTopLeft}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.mainContent.altAboutImg}
                      title={data.home.mainContent.titleAboutImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.about}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit about page'
                    id='about'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
              <div style={styleContentSmallDevices.insideSubBoxTopRight}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.mainContent.altGetInvolvedImg}
                      title={data.home.mainContent.titleGetInvolvedImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.involved}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit get involved page'
                    id='getinvolved'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div style={styleContentSmallDevices.menuSubBoxBottom}>
              <div style={styleContentSmallDevices.insideSubBoxBottomLeft}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.mainContent.altNewsImg}
                      title={data.home.mainContent.titleNewsImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.news}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit articles page'
                    id='articles'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
              <div style={styleContentSmallDevices.insideSubBoxBottomRight}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.mainContent.altDonateImg}
                      title={data.home.mainContent.titleDonateImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.donate}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit donate page'
                    id='donate'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* iPads, tablets, Portrait*/}
      {isTablet && isPortrait && (
        <main style={styleContentSmallDevices.containerContent}>
          <div style={styleContentSmallDevices.containerCoverImgMobile}>
            <div style={styleContentSmallDevices.innerBoxMain}>
              <img
                style={styleContentSmallDevices.imgInnerBoxMain}
                src={process.env.PUBLIC_URL + '/images/emre-tazegul.jpg'}
                alt={data.home.mainContent.altCoverImg}
                title={data.home.mainContent.titleCoverImg}
              />
            </div>
            <div style={styleContentSmallDevices.innerBoxMain}>
              <div style={styleContentSmallDevices.backgroundBox}>
                <div style={styleContentSmallDevices.foregroundBox}>
                  <h2>
                    Let&apos;s make <br /> the difference!
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div style={styleContentSmallDevices.menuBox}>
            <div style={styleContentSmallDevices.menuSubBoxTop}>
              <div style={styleContentSmallDevices.insideSubBoxTopLeft}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.mainContent.altAboutImg}
                      title={data.home.mainContent.titleAboutImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.about}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit about page'
                    id='about'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
              <div style={styleContentSmallDevices.insideSubBoxTopRight}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.mainContent.altGetInvolvedImg}
                      title={data.home.mainContent.titleGetInvolvedImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.involved}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit get involved page'
                    id='getinvolved'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div style={styleContentSmallDevices.menuSubBoxBottom}>
              <div style={styleContentSmallDevices.insideSubBoxBottomLeft}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.mainContent.altNewsImg}
                      title={data.home.mainContent.titleNewsImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.news}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit articles page'
                    id='articles'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
                  </button>
                </div>
              </div>
              <div style={styleContentSmallDevices.insideSubBoxBottomRight}>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div style={styleContentSmallDevices.containerImgMiniBlock}>
                    <img
                      style={styleContentSmallDevices.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.mainContent.altDonateImg}
                      title={data.home.mainContent.titleDonateImg}
                    />
                  </div>
                </div>
                <div style={styleContentSmallDevices.miniBlock}>
                  <div>{data.home.mainContent.donate}</div>
                  <button
                    className='buttonSvg'
                    type='button'
                    name='Visit donate page'
                    id='donate'
                    style={styleContentSmallDevices.arrow}
                  >
                    <SlArrowRightCircle
                      alt={data.home.mainContent.altArrowImg}
                    />
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

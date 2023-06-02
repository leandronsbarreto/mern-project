/* eslint-disable no-undef */
import styleFooter from '../styles/styleFooter';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  {
    /* window.open -> click event     */
  }
  const handleClickYT = () => {
    window.open('http://www.youtube.com', '_blank');
  };
  const handleClickFB = () => {
    window.open('http://www.facebook.com', '_blank');
  };
  const handleClickInst = () => {
    window.open('http://www.instagram.com', '_blank');
  };
  const handleClickTW = () => {
    window.open('http://www.twitter.com', '_blank');
  };

  {
    /* Media queries     */
  }
  const isVerySmall = useMediaQuery({ query: '(max-width: 284px)' });
  const isMobile = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 480px)'
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  });

  return (
    <>
      {/* Up to 284px, Portrait and Landscape     */}
      {isVerySmall && (
        <footer style={styleFooter.containerFooter}>
          <div style={styleFooter.footerBottomPart}>
            <div style={styleFooter.containerElementsfooterBottomPart}>
              <div style={styleFooter.followVerySmall}>{data.home.follow}</div>
              <div style={styleFooter.containerImagesFooterBottomPart}>
                <img
                  style={styleFooter.imagesFooterBottomPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/instagram.png'}
                  alt='Instagram logo'
                  onClick={handleClickInst}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/twitter.png'}
                  alt='Twitter logo'
                  onClick={handleClickTW}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/facebook.png'}
                  alt='Facebook logo'
                  onClick={handleClickFB}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/youtube.png'}
                  alt='YouTube logo'
                  onClick={handleClickYT}
                />
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Mobile devices, Portrait     */}
      {isMobile && (
        <footer style={styleFooter.containerFooter}>
          <div style={styleFooter.footerTopPart}>
            <button style={styleFooter.footerButtonOneMobile}>
              <div>{data.home.more}</div>
              <div>{data.home.dots}</div>
            </button>
          </div>
          <div style={styleFooter.footerBottomPart}>
            <div style={styleFooter.containerElementsfooterBottomPart}>
              <div style={styleFooter.followMobile}>{data.home.follow}</div>
              <div style={styleFooter.containerImagesFooterBottomPart}>
                <img
                  style={styleFooter.imagesFooterBottomPartMobile}
                  src={process.env.PUBLIC_URL + '/images/instagram.png'}
                  alt='Instagram logo'
                  onClick={handleClickInst}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartMobile}
                  src={process.env.PUBLIC_URL + '/images/twitter.png'}
                  alt='Twitter logo'
                  onClick={handleClickTW}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartMobile}
                  src={process.env.PUBLIC_URL + '/images/facebook.png'}
                  alt='Facebook logo'
                  onClick={handleClickFB}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartMobile}
                  src={process.env.PUBLIC_URL + '/images/youtube.png'}
                  alt='YouTube logo'
                  onClick={handleClickYT}
                />
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* iPads, tablets, Portrait and Landscape     */}
      {isTablet && (
        <footer style={styleFooter.containerFooter}>
          <div style={styleFooter.footerTopPart}>
            <button style={styleFooter.footerButtonOneTablet}>
              <div>{data.home.more}</div>
              <div>{data.home.dots}</div>
            </button>
          </div>
          <div style={styleFooter.footerBottomPart}>
            <div style={styleFooter.containerElementsfooterBottomPart}>
              <div style={styleFooter.followTablet}>{data.home.follow}</div>
              <div style={styleFooter.containerImagesFooterBottomPart}>
                <img
                  style={styleFooter.imagesFooterBottomPartTablet}
                  src={process.env.PUBLIC_URL + '/images/instagram.png'}
                  alt='Instagram logo'
                  onClick={handleClickInst}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartTablet}
                  src={process.env.PUBLIC_URL + '/images/twitter.png'}
                  alt='Twitter logo'
                  onClick={handleClickTW}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartTablet}
                  src={process.env.PUBLIC_URL + '/images/facebook.png'}
                  alt='Facebook logo'
                  onClick={handleClickFB}
                />
                <img
                  style={styleFooter.imagesFooterBottomPartTablet}
                  src={process.env.PUBLIC_URL + '/images/youtube.png'}
                  alt='YouTube logo'
                  onClick={handleClickYT}
                />
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

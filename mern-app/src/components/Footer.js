/* eslint-disable no-undef */
import styleFooter from '../styles/styleFooter';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  //window.open -> click event
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
      {/* Up to 284px, Portrait and Landscape*/}
      {isVerySmall && (
        <footer style={styleFooter.containerFooter}>
          <div style={styleFooter.footerPart}>
            <div style={styleFooter.containerElementsfooterPart}>
              <div style={styleFooter.follow}>{data.home.follow}</div>
              <div style={styleFooter.containerImagesFooterPart}>
                <img
                  style={styleFooter.imagesFooterPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/instagram.png'}
                  alt='Instagram logo'
                  onClick={handleClickInst}
                />
                <img
                  style={styleFooter.imagesFooterPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/twitter.png'}
                  alt='Twitter logo'
                  onClick={handleClickTW}
                />
                <img
                  style={styleFooter.imagesFooterPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/facebook.png'}
                  alt='Facebook logo'
                  onClick={handleClickFB}
                />
                <img
                  style={styleFooter.imagesFooterPartVerySmall}
                  src={process.env.PUBLIC_URL + '/images/youtube.png'}
                  alt='YouTube logo'
                  onClick={handleClickYT}
                />
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* Mobile devices, Portrait and Landscape*/}
      {isMobile && (
        <footer style={styleFooter.containerFooter}>
          <div style={styleFooter.footerPart}>
            <div style={styleFooter.containerElementsfooterPart}>
              <div style={styleFooter.follow}>{data.home.follow}</div>
              <div style={styleFooter.containerImagesFooterPart}>
                <img
                  style={styleFooter.imagesFooterPartMobile}
                  src={process.env.PUBLIC_URL + '/images/instagram.png'}
                  alt='Instagram logo'
                  onClick={handleClickInst}
                />
                <img
                  style={styleFooter.imagesFooterPartMobile}
                  src={process.env.PUBLIC_URL + '/images/twitter.png'}
                  alt='Twitter logo'
                  onClick={handleClickTW}
                />
                <img
                  style={styleFooter.imagesFooterPartMobile}
                  src={process.env.PUBLIC_URL + '/images/facebook.png'}
                  alt='Facebook logo'
                  onClick={handleClickFB}
                />
                <img
                  style={styleFooter.imagesFooterPartMobile}
                  src={process.env.PUBLIC_URL + '/images/youtube.png'}
                  alt='YouTube logo'
                  onClick={handleClickYT}
                />
              </div>
            </div>
          </div>
        </footer>
      )}

      {/* iPads, tablets, Portrait and Landscape*/}
      {isTablet && (
        <footer style={styleFooter.containerFooter}>
          <div style={styleFooter.footerPart}>
            <div style={styleFooter.containerElementsfooterPart}>
              <div style={styleFooter.follow}>{data.home.follow}</div>
              <div style={styleFooter.containerImagesFooterPart}>
                <img
                  style={styleFooter.imagesFooterPartTablet}
                  src={process.env.PUBLIC_URL + '/images/instagram.png'}
                  alt='Instagram logo'
                  onClick={handleClickInst}
                />
                <img
                  style={styleFooter.imagesFooterPartTablet}
                  src={process.env.PUBLIC_URL + '/images/twitter.png'}
                  alt='Twitter logo'
                  onClick={handleClickTW}
                />
                <img
                  style={styleFooter.imagesFooterPartTablet}
                  src={process.env.PUBLIC_URL + '/images/facebook.png'}
                  alt='Facebook logo'
                  onClick={handleClickFB}
                />
                <img
                  style={styleFooter.imagesFooterPartTablet}
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

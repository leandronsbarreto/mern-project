/* eslint-disable no-undef */
import styleFooter from '../styles/styleFooter';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';
import {
  SlSocialYoutube,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram
} from 'react-icons/sl';

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
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  onClick={handleClickInst}
                >
                  <SlSocialInstagram />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  onClick={handleClickTW}
                >
                  <SlSocialTwitter />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  onClick={handleClickFB}
                >
                  <SlSocialFacebook />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  onClick={handleClickYT}
                >
                  <SlSocialYoutube />
                </div>
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
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  onClick={handleClickInst}
                >
                  <SlSocialInstagram />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  onClick={handleClickTW}
                >
                  <SlSocialTwitter />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  onClick={handleClickFB}
                >
                  <SlSocialFacebook />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  onClick={handleClickYT}
                >
                  <SlSocialYoutube />
                </div>
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
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  onClick={handleClickInst}
                >
                  <SlSocialInstagram />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  onClick={handleClickTW}
                >
                  <SlSocialTwitter />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  onClick={handleClickFB}
                >
                  <SlSocialFacebook />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  onClick={handleClickYT}
                >
                  <SlSocialYoutube />
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

/* eslint-disable no-undef */
import styleFooter from '../styles/styleFooter';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';
import {
  SlSocialYoutube,
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialLinkedin
} from 'react-icons/sl';

const Footer = () => {
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
                  className='buttonSvg'
                  id='instagram'
                >
                  <SlSocialInstagram />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  className='buttonSvg'
                  id='twitter'
                >
                  <SlSocialTwitter />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  className='buttonSvg'
                  id='facebook'
                >
                  <SlSocialFacebook />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  className='buttonSvg'
                  id='youtube'
                >
                  <SlSocialYoutube />
                </div>
                <div
                  style={styleFooter.imagesFooterPartVerySmall}
                  className='buttonSvg'
                  id='linkedin'
                >
                  <SlSocialLinkedin />
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
                  className='buttonSvg'
                  id='instagram'
                >
                  <SlSocialInstagram />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  className='buttonSvg'
                  id='twitter'
                >
                  <SlSocialTwitter />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  className='buttonSvg'
                  id='facebook'
                >
                  <SlSocialFacebook />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  className='buttonSvg'
                  id='youtube'
                >
                  <SlSocialYoutube />
                </div>
                <div
                  style={styleFooter.imagesFooterPartMobile}
                  className='buttonSvg'
                  id='linkedin'
                >
                  <SlSocialLinkedin />
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
                  className='buttonSvg'
                  id='instagram'
                >
                  <SlSocialInstagram />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  className='buttonSvg'
                  id='twitter'
                >
                  <SlSocialTwitter />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  className='buttonSvg'
                  id='facebook'
                >
                  <SlSocialFacebook />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  className='buttonSvg'
                  id='youtube'
                >
                  <SlSocialYoutube />
                </div>
                <div
                  style={styleFooter.imagesFooterPartTablet}
                  className='buttonSvg'
                  id='linkedin'
                >
                  <SlSocialLinkedin />
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

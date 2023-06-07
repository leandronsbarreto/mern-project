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
              <div style={styleFooter.follow}>{data.home.footer.follow}</div>
              <div style={styleFooter.containerImagesFooterPart}>
                <button
                  style={styleFooter.buttonFooterPartVerySmall}
                  className='buttonSvg'
                  id='instagram'
                  type='button'
                  name='Go to Instagram website'
                >
                  <SlSocialInstagram alt={data.home.footer.altInstagram} />
                </button>
                <button
                  style={styleFooter.buttonFooterPartVerySmall}
                  className='buttonSvg'
                  id='twitter'
                  type='button'
                  name='Go to Twitter website'
                >
                  <SlSocialTwitter alt={data.home.footer.altTwitter} />
                </button>
                <button
                  style={styleFooter.buttonFooterPartVerySmall}
                  className='buttonSvg'
                  id='facebook'
                  type='button'
                  name='Go to Facebook website'
                >
                  <SlSocialFacebook alt={data.home.footer.altFacebook} />
                </button>
                <button
                  style={styleFooter.buttonFooterPartVerySmall}
                  className='buttonSvg'
                  id='youtube'
                  type='button'
                  name='Go to YouTube website'
                >
                  <SlSocialYoutube alt={data.home.footer.altYoutube} />
                </button>
                <button
                  style={styleFooter.buttonFooterPartVerySmall}
                  className='buttonSvg'
                  id='linkedin'
                  type='button'
                  name='Go to Linkedin website'
                >
                  <SlSocialLinkedin alt={data.home.footer.altLinkedin} />
                </button>
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
              <div style={styleFooter.follow}>{data.home.footer.follow}</div>
              <div style={styleFooter.containerImagesFooterPart}>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='instagram'
                  type='button'
                  name='Go to Instagram website'
                >
                  <SlSocialInstagram alt={data.home.footer.altInstagram} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='twitter'
                  type='button'
                  name='Go to Twitter website'
                >
                  <SlSocialTwitter alt={data.home.footer.altTwitter} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='facebook'
                  type='button'
                  name='Go to Facebook website'
                >
                  <SlSocialFacebook alt={data.home.footer.altFacebook} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='youtube'
                  type='button'
                  name='Go to YouTube website'
                >
                  <SlSocialYoutube alt={data.home.footer.altYoutube} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='linkedin'
                  type='button'
                  name='Go to Linkedin website'
                >
                  <SlSocialLinkedin alt={data.home.footer.altLinkedin} />
                </button>
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
              <div style={styleFooter.follow}>{data.home.footer.follow}</div>
              <div style={styleFooter.containerImagesFooterPart}>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='instagram'
                  type='button'
                  name='Go to Instagram website'
                >
                  <SlSocialInstagram alt={data.home.footer.altInstagram} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='twitter'
                  type='button'
                  name='Go to Twitter website'
                >
                  <SlSocialTwitter alt={data.home.footer.altTwitter} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='facebook'
                  type='button'
                  name='Go to Facebook website'
                >
                  <SlSocialFacebook alt={data.home.footer.altFacebook} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='youtube'
                  type='button'
                  name='Go to YouTube website'
                >
                  <SlSocialYoutube alt={data.home.footer.altYoutube} />
                </button>
                <button
                  style={styleFooter.buttonFooter}
                  className='buttonSvg'
                  id='linkedin'
                  type='button'
                  name='Go to Linkedin website'
                >
                  <SlSocialLinkedin alt={data.home.footer.altLinkedin} />
                </button>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;

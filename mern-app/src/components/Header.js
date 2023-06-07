/* eslint-disable no-undef */
import styleHeader from '../styles/styleHeader';
import data from '../data/dataHome.json';
import { SlLogin } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
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
      {/*Very small, portrait*/}
      {isVerySmall && isPortrait && (
        <nav style={styleHeader.containerHeader}>
          <div style={styleHeader.insideContainerHeaderVerySmall}>
            <div style={styleHeader.containerLogoHeader}>
              Help Refugees Alliance
            </div>
            <button
              id='login'
              type='button'
              name='Login button'
              className='buttonSvg'
              style={styleHeader.buttonHeaderVerySmall}
            >
              <SlLogin alt={data.home.header.altLogin} />
              Login
            </button>
          </div>
          {/* <div style={styleHeader.insideContainerHeaderVerySmall}>
            <div style={styleHeader.containerLogoHeader}></div>
            <button
              id='login'
              type='button'
              name='Login button'
              className='buttonSvg'
              style={styleHeader.buttonHeader}
            >
              <SlLogin alt={data.home.header.altLogin} />
              Login
            </button>
          </div> */}
        </nav>
      )}

      {/*Mobile devices, portrait*/}
      {isMobile && isPortrait && (
        <nav style={styleHeader.containerHeader}>
          <div style={styleHeader.insideContainerHeader}>
            <div style={styleHeader.containerImgHeader}>
              <img
                style={styleHeader.imgHeader}
                src={process.env.PUBLIC_URL + '/images/logo-black.png'}
                alt={data.home.header.altLogo}
                title={data.home.header.titleLogo}
              />
            </div>
            <button
              id='login'
              type='button'
              name='Login button'
              className='buttonSvg'
              style={styleHeader.buttonHeader}
            >
              <SlLogin alt={data.home.header.altLogin} />
              Login
            </button>
          </div>
        </nav>
      )}

      {/*iPads and tablets, portrait*/}
      {isTablet && isPortrait && (
        <nav style={styleHeader.containerHeader}>
          <div style={styleHeader.insideContainerHeader}>
            <div style={styleHeader.containerImgHeader}>
              <img
                style={styleHeader.imgHeader}
                src={process.env.PUBLIC_URL + '/images/logo-black.png'}
                alt={data.home.header.altLogo}
                title={data.home.header.titleLogo}
              />
            </div>
            <button
              id='login'
              type='button'
              name='Login button'
              className='buttonSvg'
              style={styleHeader.buttonHeader}
            >
              <SlLogin alt={data.home.header.altLogin} />
              Login
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;

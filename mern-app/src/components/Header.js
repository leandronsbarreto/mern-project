/* eslint-disable no-undef */
import styleHeader from '../styles/styleHeader';
import data from '../data/dataHome.json';
import { SlLogin } from 'react-icons/sl';
import { useMediaQuery } from 'react-responsive';

const Header = () => {
  //Media queries
  /*   const beforeVerySmal = useMediaQuery({ query: '(max-width: 190px)' }); */
  const isVerySmall = useMediaQuery({
    query: '(max-width: 284px)'
  });
  const isMobile = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 480px)'
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  });
  const isMobileAndTablet = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 768px)'
  });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' });

  return (
    <>
      {/*Very small, landscape*/}
      {isVerySmall && isLandscape && (
        <nav style={styleHeader.containerHeader}>
          <div style={styleHeader.insideContainerHeaderVerySmall}>
            <h1 style={styleHeader.containerLogoHeaderLandVs}>
              Help Refugees Alliance
            </h1>
            <button
              id='login'
              type='button'
              name='Login button'
              className='buttonSvg'
              style={styleHeader.buttonHeaderVerySmallLand}
            >
              <SlLogin alt={data.home.header.altLogin} />
              Login
            </button>
          </div>
        </nav>
      )}

      {/*Very small, portrait*/}
      {isVerySmall && isPortrait && (
        <nav style={styleHeader.containerHeader}>
          <div style={styleHeader.insideContainerHeaderVerySmall}>
            <h1 style={styleHeader.containerLogoHeader}>
              Help Refugees Alliance
            </h1>
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
        </nav>
      )}

      {/*Mobile devices, iPads, and tablets, landscape*/}
      {isMobileAndTablet && isLandscape && (
        <nav style={styleHeader.containerHeaderLand}>
          <div style={styleHeader.insideContainerHeader}>
            <div style={styleHeader.containerImgHeaderLand}>
              <img
                style={styleHeader.imgHeaderLand}
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt={data.home.header.altLogo}
                title={data.home.header.titleLogo}
              />
              <h1>Help Refugees Alliance</h1>
            </div>
            <button
              id='login'
              type='button'
              name='Login button'
              className='buttonSvg'
              style={styleHeader.buttonHeaderLand}
            >
              <SlLogin alt={data.home.header.altLogin} />
              Login
            </button>
          </div>
        </nav>
      )}

      {/*Mobile devices, portrait*/}
      {isMobile && isPortrait && (
        <nav style={styleHeader.containerHeader}>
          <div style={styleHeader.insideContainerHeader}>
            <div style={styleHeader.containerImgHeader}>
              <img
                style={styleHeader.imgHeader}
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt={data.home.header.altLogo}
                title={data.home.header.titleLogo}
              />
              <h1>
                Help <br /> Refugees <br /> Alliance
              </h1>
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
                src={process.env.PUBLIC_URL + '/images/logo.png'}
                alt={data.home.header.altLogo}
                title={data.home.header.titleLogo}
              />
              <h1>
                Help <br /> Refugees <br /> Alliance
              </h1>
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

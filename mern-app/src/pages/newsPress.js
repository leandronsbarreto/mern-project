/* eslint-disable no-undef */
import { Outlet } from 'react-router-dom';
import SharedLayoutNewsPress from '../components/SharedLayoutNewsPress';
import dataShared from '../data/dataShared';
import styleFirstPage from '../styles/styleFirstPage';
import { useMediaQuery } from 'react-responsive';
import BackButton from '../components/BackButton';

const NewsPress = () => {
  const isVerySmall = useMediaQuery({
    query: '(max-width: 284px)'
  });
  /*   const isMobile = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 480px)'
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 481px) and (max-width: 768px)'
  }); */
  const isMobileAndTablet = useMediaQuery({
    query: '(min-width: 285px) and (max-width: 768px)'
  });
  /*   const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isLandscape = useMediaQuery({ query: '(orientation: landscape)' }); */

  return (
    <>
      {/* Very small, Portrait*/}
      {isVerySmall && (
        <>
          <BackButton />
          <SharedLayoutNewsPress />
          <Outlet />
          <div className='spacing'></div>
          <main className='mainShared'>
            <div style={styleFirstPage.divImg}>
              <img
                src={process.env.PUBLIC_URL + '/images/wolfgang-gressman.jpg'}
                alt={dataShared[1].alt}
                title={dataShared[1].title}
                style={styleFirstPage.img}
              />
            </div>
            <div style={styleFirstPage.divText}>
              <div style={styleFirstPage.innerDivTextNews}></div>
              <div style={styleFirstPage.innerDivTextNews}></div>
            </div>
          </main>
        </>
      )}

      {/* Mobile devices, iPads and tablets, Portrait*/}
      {isMobileAndTablet && (
        <>
          <BackButton />
          <SharedLayoutNewsPress />
          <Outlet />
          <div className='spacing'></div>
          <main className='mainShared'>
            <div style={styleFirstPage.divImg}>
              <img
                src={process.env.PUBLIC_URL + '/images/wolfgang-gressman.jpg'}
                alt={dataShared[1].alt}
                title={dataShared[1].title}
                style={styleFirstPage.img}
              />
            </div>
            <div style={styleFirstPage.divText}>
              <div style={styleFirstPage.innerDivTextNews}></div>
              <div style={styleFirstPage.innerDivTextNews}></div>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default NewsPress;

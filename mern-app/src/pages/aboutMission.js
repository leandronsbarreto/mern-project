/* eslint-disable no-undef */
import { Outlet } from 'react-router-dom';
import SharedLayoutAboutMission from '../components/SharedLayoutAboutMission';
import { useMediaQuery } from 'react-responsive';
import BackButton from '../components/BackButton';
import styleFirstPage from '../styles/styleFirstPage';
import dataShared from '../data/dataShared';

const AboutMission = () => {
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
          <SharedLayoutAboutMission />
          <Outlet />
          <div className='spacing'></div>
          <main className='mainShared'>
            <div style={styleFirstPage.divText}>
              <div style={styleFirstPage.innerDivText}>
                {dataShared[0].presentationContent.map(item => (
                  <h2 style={styleFirstPage.h2} key={item}>
                    {item}
                  </h2>
                ))}
              </div>
            </div>
            <div style={styleFirstPage.divImg}>
              <img
                src={process.env.PUBLIC_URL + '/images/ingebjorg-karstad.jpg'}
                alt={dataShared[0].alt}
                title={dataShared[0].title}
                style={styleFirstPage.img}
              />
            </div>
          </main>
        </>
      )}

      {/* Mobile devices, iPads, and tablets, Portrait*/}
      {isMobileAndTablet && (
        <>
          <BackButton />
          <SharedLayoutAboutMission />
          <Outlet />
          <div className='spacing'></div>
          <main className='mainShared'>
            <div style={styleFirstPage.divText}>
              <div style={styleFirstPage.innerDivText}>
                {dataShared[0].presentationContent.map(item => (
                  <h2 style={styleFirstPage.h2} key={item}>
                    {item}
                  </h2>
                ))}
              </div>
            </div>
            <div style={styleFirstPage.divImg}>
              <img
                src={process.env.PUBLIC_URL + '/images/ingebjorg-karstad.jpg'}
                alt={dataShared[0].alt}
                title={dataShared[0].title}
                style={styleFirstPage.img}
              />
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default AboutMission;

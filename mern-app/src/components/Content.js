/* eslint-disable no-undef */
import styleContent from '../styles/styleContent';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';

const Content = () => {
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
        <main style={styleContent.containerContent}>
          <h1 style={styleContent.headerOne}>{data.home.headerOne}</h1>
          <div style={styleContent.containerCoverImg}>
            <img
              style={styleContent.coverImg}
              src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
              alt={data.home.titleImg}
            />
          </div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTop}></div>
              <div style={styleContent.insideSubBoxTop}></div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}></div>
              <div style={styleContent.insideSubBoxBottomRight}></div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Content;

/* eslint-disable no-undef */
import styleContent from '../styles/styleContent';
import data from '../data/dataHome.json';
import { useMediaQuery } from 'react-responsive';

const Content = () => {
  //Events
  const handlePage = e => {
    let id = e.target.id;
    id == 'news'
      ? window.open(`http://localhost:3000/articles`)
      : window.open(`http://localhost:3000/${id}`);
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
      {/* Up to 284px, Portrait and Landscape */}
      {isVerySmall && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImg}>
            <img
              style={styleContent.coverImgMobile}
              src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
              alt={data.home.altCoverImg1}
              title={data.home.titleCoverImg1}
            />
            <img
              style={styleContent.coverImgMobile}
              src={process.env.PUBLIC_URL + '/images/julie-ricard-small.jpg'}
              alt={data.home.titleImg}
            />
          </div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTopLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.about}</div>
                  <div
                    id='about'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxTopRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.involved}</div>
                  <div
                    id='getinvolved'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.news}</div>
                  <div
                    id='news'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxBottomRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.donate}</div>
                  <div
                    id='donate'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Mobile devices, Portrait and Landscape*/}
      {isMobile && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImg}>
            <img
              style={styleContent.coverImgMobile}
              src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
              alt={data.home.titleImg}
            />
          </div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTopLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.about}</div>
                  <div
                    id='about'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxTopRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.involved}</div>
                  <div
                    id='getinvolved'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.news}</div>
                  <div
                    id='news'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxBottomRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.donate}</div>
                  <div
                    id='donate'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* iPads, tablets, Portrait and Landscape*/}
      {isTablet && (
        <main style={styleContent.containerContent}>
          <div style={styleContent.containerCoverImg}>
            <img
              style={styleContent.coverImgTablet}
              src={process.env.PUBLIC_URL + '/images/tom-peyre-costa.jpg'}
              alt={data.home.titleImg}
            />
          </div>
          <div style={styleContent.menuBox}>
            <div style={styleContent.menuSubBoxTop}>
              <div style={styleContent.insideSubBoxTopLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/aboutus.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.about}</div>
                  <div
                    id='about'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxTopRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/getinvolved.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.involved}</div>
                  <div
                    id='getinvolved'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
            </div>
            <div style={styleContent.menuSubBoxBottom}>
              <div style={styleContent.insideSubBoxBottomLeft}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/news.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.news}</div>
                  <div
                    id='news'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
              <div style={styleContent.insideSubBoxBottomRight}>
                <div style={styleContent.miniBlock}>
                  <div style={styleContent.containerImgMiniBlock}>
                    <img
                      style={styleContent.imgMiniBlock}
                      src={process.env.PUBLIC_URL + '/images/donate.png'}
                      alt={data.home.titleImg}
                    />
                  </div>
                </div>
                <div style={styleContent.miniBlock}>
                  <div>{data.home.donate}</div>
                  <div
                    id='donate'
                    style={styleContent.arrow}
                    onClick={handlePage}
                  >
                    🠊
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Content;

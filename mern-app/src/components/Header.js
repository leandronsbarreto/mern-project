/* eslint-disable no-undef */
import styleHeader from '../styles/styleHeader';
import data from '../data/dataHome.json';
import { SlLogin } from 'react-icons/sl';
// import { useMediaQuery } from 'react-responsive';

const Header = () => {
  return (
    <>
      <nav style={styleHeader.containerHeader}>
        <div style={styleHeader.insideContainerHeader}>
          <div style={styleHeader.containerImgHeader}>
            <img
              style={styleHeader.imgHeader}
              src={process.env.PUBLIC_URL + '/images/logo-black.png'}
              alt={data.home.titleImg}
            />
          </div>
          <button
            type='button'
            name='Login button'
            style={styleHeader.buttonHeader}
          >
            <SlLogin /> Login
          </button>
        </div>
      </nav>
    </>
  );
};

export default Header;

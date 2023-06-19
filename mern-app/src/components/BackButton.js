import styleBackButton from '../styles/styleBackButton';
/* import { Link } from 'react-router-dom'; */
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const BackButton = () => {
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

  let navigate = useNavigate();

  return (
    <>
      {isVerySmall && (
        <div style={styleBackButton.divBackButtonVerySmall}>
          <button
            className='backButtonHome'
            style={styleBackButton.backButtonVerySmall}
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </button>
        </div>
      )}

      {isMobileAndTablet && (
        <div style={styleBackButton.divBackButton}>
          <button
            className='backButtonHome'
            style={styleBackButton.backButton}
            onClick={() => {
              navigate('/');
            }}
          >
            Home
          </button>
        </div>
      )}
    </>
  );
};

export default BackButton;

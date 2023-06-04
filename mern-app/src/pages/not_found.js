/* eslint-disable no-undef */
import styleNotFound from '../styles/stylenot_found';

const NotFoundPage = () => {
  return (
    <>
      <div style={styleNotFound.containerNotFound}>
        <h1 style={styleNotFound.h1}>Ops! Page not found.</h1>
        <div style={styleNotFound.containerImgNotFound}>
          <img
            style={styleNotFound.imgNotFound}
            src={process.env.PUBLIC_URL + '/images/pagenotfound.png'}
            alt='Illustration with the error code 404 which means Page not found.'
          />
        </div>
      </div>
    </>
  );
};

export default NotFoundPage;

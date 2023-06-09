/* eslint-disable no-undef */
import styleContentAbout from '../styles/styleContentAbout';
import data from '../data/dataAboutMission';

const ContentAbout = () => {
  return (
    <>
      <div style={styleContentAbout.mainContainer}>
        <div style={styleContentAbout.presentationContainer}>
          <h1 style={styleContentAbout.headerOne}>
            {data.about.presentation.headerOnePartOne}
          </h1>
          <h1 style={styleContentAbout.headerOne}>
            {data.about.presentation.headerOnePartTwo}
          </h1>
          <div style={styleContentAbout.imgContainer}>
            <img
              style={styleContentAbout.img}
              src={process.env.PUBLIC_URL + '/images/julie-ricard.jpg'}
            />
          </div>
        </div>
        <div style={styleContentAbout.aboutContainer}></div>
      </div>
    </>
  );
};

export default ContentAbout;

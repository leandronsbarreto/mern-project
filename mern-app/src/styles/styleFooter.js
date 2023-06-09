const styleFooter = {
  //<div style={styleFooter.containerFooter}>
  //Very small
  //Portrait
  containerFooterVerySmall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '30vh',
    width: '100%'
  },

  //<div style={styleFooter.containerFooterLand}>
  //Mobile and tablets
  //Landscape
  containerFooterLand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '30vh',
    width: '100%'
  },

  //<div style={styleFooter.containerFooter}>
  //Mobile and tablets
  //Portrait
  containerFooter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10vh',
    width: '100%'
  },

  //<div style={styleFooter.footerPart}>
  //Very small, mobile and tablets
  //Portrait
  footerPart: {
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '70%'
  },

  //<div style={styleFooter.containerElementsfooterPartLand}>
  //Mobile and tablets
  //Landscape
  containerElementsfooterPartLand: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '0.3rem',
    height: 'auto',
    width: '90%'
  },

  //<div style={styleFooter.containerElementsfooterPart}>
  //Very small, mobile and tablets
  //Portrait
  containerElementsfooterPart: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.3rem',
    height: 'auto',
    width: '90%'
  },

  //<div style={styleFooter.followTablet}>{data[0].follow}</div>
  //Tablets
  //Portrait
  follow: {
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleFooter.containerImagesFooterPartVerySmall}>
  //Very small
  //Portrait
  containerImagesFooterPartVerySmall: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'auto',
    width: '70%',
    gap: '1rem'
  },

  //<div style={styleFooter.containerImagesFooterPart}>
  //Mobile and tablets
  //Portrait
  containerImagesFooterPart: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 'auto',
    width: '70%'
  },

  //<button style={styleFooter.buttonFooterPartVerySmall}/>
  //Very small
  //Portrait
  buttonFooterPartVerySmall: {
    backgroundColor: 'transparent',
    height: 'auto',
    width: '0.5rem',
    border: 'none'
  },

  //<button style={styleFooter.buttonFooterTablet}/>
  //Mobile and tablets
  //Landscape
  buttonFooterLand: {
    backgroundColor: 'transparent',
    height: 'auto',
    width: '1rem',
    fontSize: '0.938rem',
    border: 'none'
  },

  //<button style={styleFooter.buttonFooterTablet}/>
  //Mobile and tablets
  //Portrait
  buttonFooter: {
    backgroundColor: 'transparent',
    height: 'auto',
    width: '2rem',
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    border: 'none'
  }
};

export default styleFooter;

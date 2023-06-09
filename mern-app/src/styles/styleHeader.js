const styleHeader = {
  //<div style={styleHeader.containerHeaderLand}>
  //Mobile and tablets
  //Land
  containerHeaderLand: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '30vh',
    width: '100%'
  },

  //<div style={styleHeader.containerHeader}>
  //Verysmall, mobile and tablets
  //Portrait
  containerHeader: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh',
    width: '100%'
  },

  //<div style={styleHeader.insideContainerHeaderVerySmall}>
  //Very small
  //Portrait
  insideContainerHeaderVerySmall: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'clamp(1.25rem, -0.0336rem + 10.7527vw, 1.875rem)',
    width: '95%'
  },

  //<div style={styleHeader.insideContainerHeader}>
  //Mobile and tablets
  //Portrait and landscape
  insideContainerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 'clamp(2.1875rem, 1.0811rem + 6.2112vw, 4.0625rem)',
    width: '95%'
  },

  //<div style={styleHeader.containerLogoHeaderLandVs}>
  //Very small
  //Landscape
  containerLogoHeaderLandVs: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '0.938rem',
    width: 'clamp(4.375rem, 1.3368rem + 34.7222vw, 7.5rem)',
    fontSize: 'clamp(0.4375rem, 0.1337rem + 3.4722vw, 0.75rem)',
    fontWeight: '500',
    borderRadius: 'clamp(0.125rem, -0.1317rem + 2.1505vw, 0.25rem)'
  },

  //<div style={styleHeader.containerLogoHeader}>
  //Very small
  //Portrait
  containerLogoHeader: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(1.125rem, 0.2265rem + 7.5269vw, 1.5625rem)',
    width: 'clamp(4.375rem, 1.3368rem + 34.7222vw, 7.5rem)',
    fontSize: 'clamp(0.4375rem, 0.1337rem + 3.4722vw, 0.75rem)',
    fontWeight: '500',
    borderRadius: 'clamp(0.125rem, -0.1317rem + 2.1505vw, 0.25rem)'
  },

  //<div style={styleHeader.containerImgHeaderLand}>
  //Mobile and tablets
  //Landscape
  containerImgHeaderLand: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'clamp(1.25rem, -0.0408rem + 7.2464vw, 3.4375rem)',
    width: '40%',
    borderRadius: '0.625rem',
    padding: '1rem',
    fontSize: 'clamp(0.25rem, -0.1557rem + 2.2774vw, 0.9375rem)'
  },

  //<div style={styleHeader.containerImgHeader}>
  //Mobile and tablets
  //Portrait
  containerImgHeader: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'clamp(2.14125rem, -0.025rem + 12.1615vw, 5.8125rem)',
    width: '40%',
    borderRadius: '0.625rem',
    padding: '1rem',
    fontSize: 'clamp(0.375rem, 0.0062rem + 2.0704vw, 1rem)'
  },

  //<img style={styleHeader.imgHeaderLand}>
  //Mobile and tablets
  //Landscape
  imgHeaderLand: {
    height: 'auto',
    width: '26%'
  },

  //<img style={styleHeader.imgHeader}>
  //Mobile and tablets
  //Portrait
  imgHeader: {
    height: 'auto',
    width: '30%'
  },

  //<button style={styleHeader.buttonHeaderVerySmallLand}>
  //Very small
  //Landscape
  buttonHeaderVerySmallLand: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '13px', //'clamp(0.9375rem, 0.2957rem + 5.3763vw, 1.25rem)',
    width: 'clamp(3.125rem, 2.4832rem + 5.3763vw, 3.4375rem)',
    border: 'none',
    fontSize: '8px',
    fontWeight: '500',
    borderRadius: 'clamp(0.125rem, -0.1317rem + 2.1505vw, 0.25rem)'
  },

  //<button style={styleHeader.buttonHeaderVerySmall}>
  //Very small
  //Portrait
  buttonHeaderVerySmall: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'clamp(0.9375rem, 0.2957rem + 5.3763vw, 1.25rem)',
    width: 'clamp(3.125rem, 2.4832rem + 5.3763vw, 3.4375rem)',
    border: 'none',
    fontSize: 'clamp(0.4375rem, 0.1337rem + 3.4722vw, 0.75rem)',
    fontWeight: '500',
    borderRadius: 'clamp(0.125rem, -0.1317rem + 2.1505vw, 0.25rem)'
  },

  //<button style={styleHeader.buttonHeaderLand}>
  //Mobile and tablets
  //Landscape
  buttonHeaderLand: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '40%',
    width: '20%',
    border: 'none',
    fontSize: 'clamp(0.375rem, 0.0431rem + 1.8634vw, 0.9375rem)',
    fontWeight: '500',
    borderRadius: '0.313rem'
  },

  //<button style={styleHeader.buttonHeader}>
  //Mobile and tablets
  //Portrait
  buttonHeader: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '40%',
    width: '20%',
    border: 'none',
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    fontWeight: '500',
    borderRadius: '0.313rem'
  }
};

export default styleHeader;

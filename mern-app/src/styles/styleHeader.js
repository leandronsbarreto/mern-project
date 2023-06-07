const styleHeader = {
  //<div style={styleHeader.containerHeader}>
  //Mobile and tablets
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
  //Portrait
  insideContainerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '95%'
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
    width: 'clamp(6.25rem, 3.6828rem + 21.5054vw, 7.5rem)',
    fontSize: 'clamp(0.6875rem, 0.5591rem + 1.0753vw, 0.75rem)',
    fontWeight: '500',
    borderRadius: 'clamp(0.125rem, -0.1317rem + 2.1505vw, 0.25rem)'
  },

  //<div style={styleHeader.containerImgHeader}>
  //Mobile and tablets
  //Portrait
  containerImgHeader: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '48%',
    borderRadius: '0.938rem',
    padding: '1rem'
  },

  //<img style={styleHeader.imgHeader}>
  //Mobile and tablets
  //Portrait
  imgHeader: {
    height: 'auto',
    width: '60%'
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
    fontSize: 'clamp(0.59375rem, 0.4654rem + 1.0753vw, 0.65625rem)',
    fontWeight: '500',
    borderRadius: 'clamp(0.125rem, -0.1317rem + 2.1505vw, 0.25rem)'
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

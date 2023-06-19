const styleBackButton = {
  //<div style={styleBackButton.divBackButtonVerySmall}>
  //Very small
  //Portrait
  divBackButtonVerySmall: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    alignItems: 'center',
    height: '20vh',
    width: '100%',
    paddingLeft: '1rem',
    position: 'fixed'
  },

  //<div style={styleBackButton.divBackButton}>
  //Mobile and tablets
  //Portrait
  divBackButton: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    alignItems: 'center',
    height: '7vh',
    width: '100%',
    paddingLeft: '1rem',
    position: 'fixed'
  },

  //<button style={styleBackButton.backButtonVerySmall}>
  //Very small
  //Portrait
  backButtonVerySmall: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'clamp(0.9375rem, 0.6737rem + 3.2468vw, 1.25rem)',
    width: 'clamp(2.1875rem, 1.6161rem + 7.0325vw, 2.864375rem)',
    border: 'none',
    borderRadius: 'clamp(0.125rem, 0.0141rem + 0.6228vw, 0.313rem)',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: 'clamp(0.625rem, 0.33rem + 1.6563vw, 1.125rem)',
    fontWeight: '400'
  },

  //<button style={styleBackButton.backButton}>
  //Mobile and tablets
  //Portrait
  backButton: {
    backgroundColor: 'var(--light-green)',
    color: 'var(--black)',
    boxShadow: '1px 1px 1px #eae3e3',
    padding: '7px 7px',
    borderRadius: 'clamp(0.125rem, 0.0141rem + 0.6228vw, 0.313rem)',
    border: 'none',
    fontSize: 'clamp(0.4375rem, 0.1793rem + 1.4493vw, 0.875rem)',
    fontWeight: '400',
    fontFamily: 'Barlow Condensed, sans-serif'
  }
};

export default styleBackButton;

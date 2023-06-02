const styleFooter = {
  //<div style={styleFooter.containerFooter}>
  //Very small, mobile, tablet
  containerFooter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '15vh',
    width: '100%'
  },

  //<div style={styleFooter.footerTopPart}>
  //Very small, mobile, tablet
  footerTopPart: {
    backgroundColor: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '40%'
  },

  //<div style={styleFooter.footerBottomPart}>
  //Very small, mobile, tablet
  footerBottomPart: {
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '40%'
  },

  //<button style={styleFooter.footerButtonOneVerySmall}>
  //Very small
  footerButtonOneVerySmall: {
    cursor: 'pointer',
    backgroundColor: 'var(--dark-green)',
    color: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    width: 'clamp(1.5625rem, 1.2286rem + 10.6838vw, 3.125rem)',
    border: 'none',
    borderRadius: 'clamp(0.1875rem, 0.1741rem + 0.4274vw, 0.25rem)',
    padding: '0.125rem',
    fontFamily: 'Barlow',
    fontSize: 'clamp(0.3125rem, 0.2457rem + 2.1368vw, 0.625rem)'
  },

  //<button style={styleFooter.footerButtonOneMobile}>
  //Mobile
  footerButtonOneMobile: {
    cursor: 'pointer',
    backgroundColor: 'var(--dark-green)',
    color: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    width: 'clamp(3.1875rem, -1.2885rem + 25.1282vw, 6.25rem)',
    border: 'none',
    borderRadius: 'clamp(0.1875rem, 0.0962rem + 0.5128vw, 0.25rem)',
    padding: '0.2rem',
    fontFamily: 'Barlow',
    fontSize: 'clamp(0.625rem, 0.3648rem + 8.1633vw, 0.875rem)',
    textAlign: 'center'
  },

  //<button style={styleFooter.footerButtonOneTablet}>
  //Tablet
  footerButtonOneTablet: {
    cursor: 'pointer',
    backgroundColor: 'var(--dark-green)',
    color: 'var(--white)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    width: 'clamp(6.3125rem, 1.1799rem + 17.0732vw, 9.375rem)',
    border: 'none',
    borderRadius: 'clamp(0.1875rem, 0.0828rem + 0.3484vw, 0.25rem)',
    padding: '0.5rem',
    fontFamily: 'Barlow',
    fontSize: 'clamp(0.875rem, 0.6173rem + 4.0816vw, 1rem)'
  },

  //<div style={styleFooter.containerElementsfooterBottomPart}>
  //Very small, mobile, tablet
  containerElementsfooterBottomPart: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '0.3rem',
    height: 'auto',
    width: '90%'
  },

  //<div style={styleFooter.followVerySmall}>{data[0].follow}</div>
  //Very small
  followVerySmall: {
    fontFamily: 'Barlow',
    fontSize: 'clamp(0.3125rem, 0.2457rem + 2.1368vw, 0.625rem)'
  },

  //<div style={styleFooter.followMobile}>{data[0].follow}</div>
  //Mobile
  followMobile: {
    fontFamily: 'Barlow',
    fontSize: 'clamp(0.625rem, 0.3648rem + 8.1633vw, 0.875rem)'
  },

  //<div style={styleFooter.followTablet}>{data[0].follow}</div>
  //Tablet
  followTablet: {
    fontFamily: 'Barlow',
    fontSize: 'clamp(0.875rem, 0.6173rem + 4.0816vw, 1rem)'
  },

  //<div style={styleFooter.containerImagesFooterBottomPart}>
  //Very small, mobile, tablet
  containerImagesFooterBottomPart: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 'auto',
    width: '70%'
  },

  //<img style={styleFooter.imagesFooterBottomPartVerySmall}/>
  //Very small
  imagesFooterBottomPartVerySmall: {
    height: 'auto',
    width: '0.775rem'
  },

  //<img style={styleFooter.imagesFooterBottomMobile}/>
  //Mobile
  imagesFooterBottomPartMobile: {
    height: 'auto',
    width: '0.875rem'
  },

  //<img style={styleFooter.imagesFooterBottomTablet}/>
  //Tablet
  imagesFooterBottomPartTablet: {
    height: 'auto',
    width: '0.9rem'
  }
};

export default styleFooter;

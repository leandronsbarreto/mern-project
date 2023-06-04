const styleFooter = {
  //<div style={styleFooter.containerFooter}>
  //Very small, mobile, tablet
  containerFooter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10vh',
    width: '100%'
  },

  //<div style={styleFooter.footerPart}>
  //Very small, mobile, tablet
  footerPart: {
    backgroundColor: 'var(--white)',
    color: 'var(--black)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '70%'
  },

  //<div style={styleFooter.containerElementsfooterPart}>
  //Very small, mobile, tablet
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
  //Tablet
  follow: {
    fontSize: 'clamp(0.5rem, 0.4652rem + 1.1142vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleFooter.containerImagesFooterPart}>
  //Very small, mobile, tablet
  containerImagesFooterPart: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    height: 'auto',
    width: '70%'
  },

  //<img style={styleFooter.imagesFooterPartVerySmall}/>
  //Very small
  imagesFooterPartVerySmall: {
    height: 'auto',
    width: '0.8rem'
  },

  //<img style={styleFooter.imagesFooterMobile}/>
  //Mobile
  imagesFooterPartMobile: {
    height: 'auto',
    width: '0.9rem'
  },

  //<img style={styleFooter.imagesFooterTablet}/>
  //Tablet
  imagesFooterPartTablet: {
    height: 'auto',
    width: '1rem'
  }
};

export default styleFooter;

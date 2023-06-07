const styleContentSmallDevices = {
  //<div style={styleContent.containerContentVerySmall}>
  //Very small
  //Portrait
  containerContentVerySmall: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '75vh',
    width: '100%',
    overflow: 'scroll'
  },

  //<div style={styleContent.containerContent}>
  //Mobile and tablets
  //Portrait
  containerContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '75vh',
    width: '100%',
    overflow: 'hidden'
  },

  //<div style={styleContent.containerCoverImgVerySmall}>
  //Very small
  //Portrait
  containerCoverImgVerySmall: {
    display: 'flex',
    minHeight: '30vh',
    minWidth: '95%'
  },

  //<div style={styleContent.containerCoverImg}>
  //Mobile and tablets
  //Portrait
  containerCoverImgMobile: {
    display: 'flex',
    height: '32vh',
    width: '95%'
  },

  //<div style={styleContent.innerBoxMainVerySmall}>
  //Very small
  //Portrait
  innerBoxMainVerySmall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
    width: '50%'
  },

  //<div style={styleContent.innerBoxMain}>
  //Mobile and tablets
  //Portrait
  innerBoxMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '50%'
    /*     border: '2px dashed',
    borderColor: 'orange' */
  },

  //<img style={styleContent.imgInnerBoxMainVerySmall}
  //Very small
  //Portrait
  imgInnerBoxMainVerySmall: {
    height: 'auto',
    width: 'clamp(4.7rem, -1.8656rem + 55vw, 7.896875rem)',
    borderRadius: '0.313rem'
  },

  //<img style={styleContent.imgInnerBoxMain}
  //Mobile and tablets
  //Portrait
  imgInnerBoxMain: {
    height: 'auto',
    width: '90%',
    borderRadius: '0.625rem'
  },

  //<div style={styleContent.backgroundBoxVerySmall}>
  //Very small
  //Portrait
  backgroundBoxVerySmall: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'clamp(2.1875rem, 0.2621rem + 16.129vw, 3.125rem)',
    width: 'clamp(3.125rem, -0.7258rem + 32.2581vw, 5rem)',
    borderRadius: '0.938rem'
  },

  //<div style={styleContent.backgroundBox}>
  //Mobile and tablets
  //Portrait
  backgroundBox: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'clamp(3.125rem, -0.5629rem + 20.7039vw, 9.375rem)',
    width: 'clamp(5.3125rem, 1.0714rem + 23.8095vw, 12.5rem)',
    borderRadius: '0.938rem'
  },

  //<div style={styleContent.foreroundBoxVerySmall}>
  //Very small
  //Portrait
  foregroundBoxVerySmall: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(2.1875rem, 0.2621rem + 16.129vw, 3.125rem)',
    width: 'clamp(3.125rem, -0.7258rem + 32.2581vw, 5rem)',
    borderRadius: '0.938rem',
    padding: 'clamp(1rem, -0.676rem + 5.5749vw, 2rem)',
    marginLeft: 'clamp(0.9375rem, 0.2957rem + 5.3763vw, 1.25rem)',
    marginTop: 'clamp(0.9375rem, 0.2957rem + 5.3763vw, 1.25rem)',
    fontSize: 'clamp(0.25rem, -0.2634rem + 4.3011vw, 0.5rem)',
    fontWeight: '150'
  },

  //<div style={styleContent.foreroundBox}>
  //Mobile and tablets
  //Portrait
  foregroundBox: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(3.125rem, -0.5629rem + 20.7039vw, 9.375rem)',
    width: 'clamp(5.3125rem, 1.0714rem + 23.8095vw, 12.5rem)',
    borderRadius: '0.938rem',
    padding: 'clamp(1rem, -0.676rem + 5.5749vw, 2rem)',
    marginLeft: 'clamp(2.5rem, 1.3936rem + 6.2112vw, 4.375rem)',
    marginTop: 'clamp(2.1875rem, 0.8967rem + 7.2464vw, 4.375rem)',
    fontSize: 'clamp(0.5rem, 0.205rem + 1.6563vw, 1rem)'
  },

  //<div style={styleContent.menuBoxVerySmall}>
  //Very small
  //Portrait
  menuBoxVerySmall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '40vh',
    width: '95%'
  },

  //<div style={styleContent.menuBox}>
  //Mobile and tablets
  //Portrait
  menuBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '40vh',
    width: '95%'
  },

  //<div style={styleContent.menuSubBoxTopVerySmall}>
  //Very small
  //Portrait
  menuSubBoxTopVerySmall: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 'clamp(3.125rem, 2.4832rem + 5.3763vw, 3.4375rem)',
    width: '100%'
  },

  //<div style={styleContent.menuSubBoxTop}>
  //Mobile and tablets
  //Portrait
  menuSubBoxTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  },

  //<div style={styleContent.menuSubBoxBottomVerySmall}>
  //Very small
  //Portrait
  menuSubBoxBottomVerySmall: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 'clamp(3.125rem, 2.4832rem + 5.3763vw, 3.4375rem)',
    width: '100%'
  },

  //<div style={styleContent.menuSubBoxTop}>
  //Mobile and tablets
  //Portrait
  menuSubBoxBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  },

  //<div style={styleContent.insideSubBoxTopLeft}>
  //Very small, mobile and tablets
  //Portrait
  insideSubBoxTopLeft: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95%',
    width: '48%',
    borderTopLeftRadius: '0.938rem',
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.insideSubBoxTopRight}>
  //Very small, mobile and tablets
  //Portrait
  insideSubBoxTopRight: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95%',
    width: '48%',
    borderTopRightRadius: '0.938rem',
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.insideSubBoxBottomLeft}>
  //Mobile and tablets
  //Portrait
  insideSubBoxBottomLeft: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '48%',
    borderBottomLeftRadius: '0.938rem',
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.insideSubBoxBottomRight}>
  //Mobile and tablets
  //Portrait
  insideSubBoxBottomRight: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '95%',
    width: '48%',
    borderBottomRightRadius: '0.938rem',
    fontSize: 'clamp(0.625rem, 0.4037rem + 1.2422vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.miniBlock}>
  //Very small, mobile and tablets
  //Portrait
  miniBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
    width: '85%'
  },

  //<div style={styleContent.containerImgMiniBlock}>
  //Mobile and tablets
  //Portrait
  containerImgMiniBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%'
  },

  //<img style={styleContent.imgMiniBlock}
  //Mobile and tablets
  //Portrait
  imgMiniBlock: {
    height: 'auto',
    width: '17.5%'
  },

  //<div style={styleContent.arrowVerySmall}>
  //Very small
  //Portrait
  arrowVerySmall: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(1rem, 0.4837rem + 2.8986vw, 1.875rem)',
    width: 'clamp(1rem, 0.4837rem + 2.8986vw, 1.875rem)',
    fontSize: '0.5rem',
    border: 'none'
  },

  //<div style={styleContent.arrow}>
  //Mobile and tablets
  //Portrait
  arrow: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(1rem, 0.4837rem + 2.8986vw, 1.875rem)',
    width: 'clamp(1rem, 0.4837rem + 2.8986vw, 1.875rem)',
    fontSize: 'clamp(0.9375rem, 0.1999rem + 4.1408vw, 2.1875rem)',
    border: 'none'
  }
};

export default styleContentSmallDevices;

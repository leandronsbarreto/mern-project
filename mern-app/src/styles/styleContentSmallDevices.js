const styleContentSmallDevices = {
  //Begin orientation portrait

  //<div style={styleContent.containerContentVerySmall}>
  //Very small
  //Portrait
  containerContentVerySmall: {
    display: 'flex',
    justifyContent: 'center',
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
    height: '75vh', //75vh
    width: '100%',
    overflow: 'hidden'
  },

  //<div style={styleContent.containerCoverImgVerySmall}>
  //Very small
  //Portrait
  containerCoverImgVerySmall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '30vh',
    minWidth: '95%'
  },

  //<div style={styleContent.containerCoverImg}>
  //Mobile and tablets
  //Portrait
  containerCoverImgMobile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32vh',
    width: '95%'
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
  },

  //<img style={styleContent.imgInnerBoxMain}
  //Mobile and tablets
  //Portrait
  imgInnerBoxMain: {
    height: 'auto',
    width: '90%',
    borderRadius: '0.625rem'
  },

  //<div style={styleContent.foreroundBoxVerySmall}>
  //Very small
  //Portrait
  foregroundBoxVerySmall: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(2.5rem, -0.0672rem + 21.5054vw, 3.75rem)',
    width: 'clamp(6.25rem, -0.168rem + 53.7634vw, 9.375rem)',
    borderRadius: '0.625rem',
    padding: 'clamp(1rem, -0.676rem + 5.5749vw, 2rem)',
    fontSize: 'clamp(0.4375rem, 0.0524rem + 3.2258vw, 0.625rem)',
    fontWeight: '150',
    boxShadow:
      'clamp(0.625rem, 0.3683rem + 2.1505vw, 0.75rem) clamp(0.3125rem, -0.586rem + 7.5269vw, 0.75rem) var(--light-green)'
  },

  //<div style={styleContent.foreroundBox}>
  //Mobile and tablets
  //Portrait
  foregroundBox: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'clamp(3.75rem, 0.7997rem + 16.5631vw, 8.75rem)',
    width: 'clamp(7.5rem, 1.5994rem + 33.1263vw, 17.5rem)',
    borderRadius: '0.938rem',
    padding: 'clamp(1rem, -0.676rem + 5.5749vw, 2rem)',
    fontSize: 'clamp(0.5rem, 0.205rem + 1.6563vw, 1rem)',
    boxShadow:
      'clamp(0.625rem, 0.4406rem + 1.0352vw, 0.9375rem) clamp(0.625rem, 0.4406rem + 1.0352vw, 0.9375rem) var(--light-green)'
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
  },

  //End orientation portrait

  //Begin orientation landscape

  //<div style={styleContent.foreroundBoxLandVs}>
  //Very small
  //Landscape
  foregroundBoxLandVs: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '1.25rem',
    width: 'clamp(6.25rem, -0.168rem + 53.7634vw, 9.375rem)',
    borderRadius: '0.625rem',
    padding: 'clamp(1rem, -0.676rem + 5.5749vw, 2rem)',
    fontSize: '0.5rem',
    fontWeight: '150'
  },

  //<div style={styleContent.containerContentLand}>
  //Mobile and tablets
  //Landscape
  containerContentLand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '80vh',
    width: '100%',
    overflow: 'hidden'
  },

  //<div style={styleContent.containerCoverImgLand}>
  //Mobile and tablets
  //Landscape
  containerCoverImgLand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    width: '95%',
    padding: '1rem'
  },

  //<img style={styleContent.imgInnerBoxMainLand}
  //Mobile and tablets
  //Landscape
  imgInnerBoxMainLand: {
    height: 'auto',
    width: '60%',
    borderRadius: '0.625rem'
  },

  //<div style={styleContent.foreroundBoxLand}>
  //Mobile and tablets
  //Landscape
  foregroundBoxLand: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3.75rem',
    width: '7.5rem',
    borderRadius: '0.625rem',
    padding: '0.5rem',
    fontSize: '0.688rem',
    boxShadow: '0.313rem 0.313rem var(--light-green)'
  },

  //<div style={styleContent.menuBoxLand}>
  //Mobile and tablets
  //Landscape
  menuBoxLand: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: '30vh',
    width: '95%',
    padding: '0.5rem'
  },

  //<div style={styleContentSmallDevices.insideMenuBoxLand}>
  //Mobile and tablets
  //Landscape
  insideMenuBoxLand: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '6.75rem',
    width: '22.5%',
    borderRadius: '0.625rem'
  },

  //<div style={styleContentSmallDevices.miniBlockLand}>
  //Mobile and tablets
  //Landscape
  miniBlockLand: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: '0.5rem',
    height: 'auto',
    width: '100%',
    fontSize: '0.813rem'
  },

  //<div style={styleContentSmallDevices.textBox}>
  //Mobile and tablets
  //Landscape
  textBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '1rem',
    width: '2.5rem'
  },

  //<img style={styleContent.imgMiniBlockLand}
  //Mobile and tablets
  //Landscape
  imgMiniBlockLand: {
    height: 'auto',
    width: '29%'
  },

  //<div style={styleContent.arrowLand}>
  //Mobile and tablets
  //Landscape
  arrowLand: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875rem',
    border: 'none'
  }
};

export default styleContentSmallDevices;

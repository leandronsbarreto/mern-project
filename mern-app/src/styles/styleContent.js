const styleContent = {
  //<div style={styleContent.containerContent}>
  //Very small, mobile, and tablets
  //Portrait
  containerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    height: '75vh',
    width: '100%',
    overflow: 'hidden'
  },

  //<div style={styleContent.containerCoverImg}>
  //Very small
  //Portrait
  containerCoverImgVerySmall: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '30vh',
    width: '95%'
  },

  //<div style={styleContent.containerCoverImg}>
  //Mobile
  //Portrait
  containerCoverImgMobile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '32vh',
    width: '95%'
  },

  //<img style={styleContent.coverImgVerySmall}/>
  //Very small
  //Portrait
  coverImgVerySmall: {
    height: 'auto',
    width: '95%',
    opacity: '1'
  },

  //<img style={styleContent.coverImgMobile}/>
  //Mobile
  //Portrait
  coverImgMobile: {
    height: 'auto',
    width: 'clamp(15.97375rem, 12.15rem + 21.4667vw, 18.59rem)'
  },

  //<img style={styleContent.coverImgTablet}/>
  //Tablet
  //Portrait
  coverImgTablet: {
    height: 'auto',
    width: 'clamp(18.59rem, 3.8929rem + 48.8885vw, 27.359375rem)'
  },

  //<div style={styleContent.menuBox}>
  //Very small, mobile, and tablets
  //Portrait
  menuBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '40vh',
    width: '95%'
  },

  //<div style={styleContent.menuSubBoxTop}>
  //Very small, mobile, and tablets
  //Portrait
  menuSubBoxTop: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  },

  //<div style={styleContent.insideSubBoxTopLeft}>
  //Very small, mobile, and tablets
  //Portrait
  insideSubBoxTopLeft: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '95%',
    width: '48%',
    borderTopLeftRadius: '0.938rem',
    fontSize: 'clamp(0.5rem, 0.4652rem + 1.1142vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.miniBlock}>
  //Very small, mobile, and tablets
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
  //Very small, mobile, and tablets
  //Portrait
  containerImgMiniBlock: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '100%'
  },

  //<div style={styleContent.insideSubBoxTopRight}>
  //Very small, mobile, and tablets
  //Portrait
  insideSubBoxTopRight: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '95%',
    width: '48%',
    borderTopRightRadius: '0.938rem',
    fontSize: 'clamp(0.5rem, 0.4652rem + 1.1142vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.menuSubBoxTop}>
  //Very small, mobile, and tablets
  //Portrait
  menuSubBoxBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  },

  //<div style={styleContent.insideSubBoxBottomLeft}>
  //Very small, mobile, and tablets
  //Portrait
  insideSubBoxBottomLeft: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '95%',
    width: '48%',
    borderBottomLeftRadius: '0.938rem',
    fontSize: 'clamp(0.5rem, 0.4652rem + 1.1142vw, 1rem)',
    fontWeight: '500'
  },

  //<div style={styleContent.insideSubBoxBottomRight}>
  //Very small, mobile, and tablets
  //Portrait
  insideSubBoxBottomRight: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '95%',
    width: '48%',
    borderBottomRightRadius: '0.938rem',
    fontSize: 'clamp(0.5rem, 0.4652rem + 1.1142vw, 1rem)',
    fontWeight: '500'
  },

  //<img style={styleContent.imgMiniBlock}
  //Very small, mobile, and tablets
  //Portrait
  imgMiniBlock: {
    height: 'auto',
    width: '17.5%'
  },

  //<div style={styleContent.arrow}>
  //Very small, mobile, and tablets
  //Portrait
  arrow: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '1.875rem',
    width: '1.875rem',
    borderRadius: '50%'
  }
};

export default styleContent;

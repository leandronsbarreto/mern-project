const styleNotFound = {
  //<div style={styleNotFound.containerNotFound}>
  containerNotFound: {
    color: 'var(--black)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh',
    width: '100%'
  },

  //<div style={styleNotFound.containerImgNotFound}>
  containerImgNotFound: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 'auto',
    width: '80%',
    fontSize: 'clamp(0.75rem, 0.7326rem + 0.0348vw, 1rem)'
  },

  h1: {
    fontSize: 'clamp(1.25rem, 1.2298rem + 0.6452vw, 1.875rem)'
  },

  //<img style={styleNotFound.imgNotFound}>
  imgNotFound: {
    minHeight: 'auto',
    width: '80%'
  }
};

export default styleNotFound;

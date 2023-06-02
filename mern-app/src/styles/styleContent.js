const styleContent = {
  //<div style={styleContent.containerContent}>
  containerContent: {
    color: 'var(--black)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    flexDirection: 'column',
    height: '70vh',
    width: '100%'
  },

  headerOne: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '10vh',
    width: '95%',
    padding: '0.5rem',
    borderTopLeftRadius: '0.938rem',
    borderTopRightRadius: '0.938rem',
    fontSize: 'clamp(0.875rem, 0.8216rem + 1.7994vw, 1.125rem)'
  },

  containerCoverImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: '25vh',
    width: '95%'
  },

  coverImg: {
    height: 'auto',
    width: '90%'
  },

  headerTwo: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: 'auto',
    width: '95%',
    padding: '0.5rem',
    fontSize: 'clamp(0.5rem, 0.4466rem + 1.7994vw, 0.75rem)',
    textAlign: 'justify'
  },

  menuBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '25vh',
    width: '95%'
  },

  menuSubBoxTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  },

  insideSubBoxTop: {
    backgroundColor: 'var(--light-green)',
    height: '90%',
    width: '47%'
  },

  insideSubBoxBottomLeft: {
    backgroundColor: 'var(--light-green)',
    height: '90%',
    width: '47%',
    borderBottomLeftRadius: '0.938rem'
  },

  insideSubBoxBottomRight: {
    backgroundColor: 'var(--light-green)',
    height: '90%',
    width: '47%',
    borderBottomRightRadius: '0.938rem'
  },

  menuSubBoxBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'end',
    flexDirection: 'row',
    height: '50%',
    width: '100%'
  }
};

export default styleContent;

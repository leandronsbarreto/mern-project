const styleHeader = {
  //<div style={styleHeader.containerHeader}>
  containerHeader: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '15vh',
    width: '100%'
  },

  insideContainerHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    width: '95%'
  },

  containerImgHeader: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '48%',
    borderRadius: '0.938rem'
  },

  imgHeader: {
    height: 'auto',
    width: '60%'
  },

  buttonHeader: {
    backgroundColor: 'var(--light-green)',
    height: '40%',
    width: '20%',
    border: 'none',
    fontSize: 'clamp(0.5rem, 0.4652rem + 1.1142vw, 1rem)',
    fontWeight: '500',
    borderRadius: '0.313rem'
  }
};

export default styleHeader;

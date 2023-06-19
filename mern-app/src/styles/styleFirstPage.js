const styleFirstPage = {
  divImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '55vh',
    width: '100%'
  },

  img: {
    height: 'auto',
    width: '90%',
    margin: '1rem 0 1rem 0',
    borderRadius: 'clamp(0.3125rem, 0.1281rem + 1.0352vw, 0.625rem)'
  },

  innerDivImg: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'clamp(6.25rem, 2.5621rem + 20.7039vw, 12.5rem)',
    width: '90%',
    margin: '0.5rem 0 1rem 0',
    borderRadius: 'clamp(0.3125rem, 0.1281rem + 1.0352vw, 0.625rem)'
  },

  innerDivImgBox: {
    backgroundColor: 'var(--gray)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'auto',
    width: '90%',
    borderRadius: 'clamp(0.3125rem, 0.1281rem + 1.0352vw, 0.625rem)'
  },

  p: {
    height: 'auto',
    width: '90%',
    margin: 'clamp(0.2rem, -0.154rem + 1.9876vw, 0.8rem)',
    fontSize: 'clamp(0.5rem, 0.205rem + 1.6563vw, 1rem)',
    textAlign: 'justify',
    fontWeight: '500'
  },

  button: {
    backgroundColor: 'var(--light-green)',
    color: 'var(--black)',
    boxShadow: '1px 1px 1px #eae3e3',
    padding: '7px 7px',
    borderRadius: 'clamp(0.125rem, 0.0141rem + 0.6228vw, 0.313rem)',
    border: 'none',
    fontSize: 'clamp(0.4375rem, 0.1793rem + 1.4493vw, 0.875rem)',
    fontWeight: '400',
    fontFamily: 'Barlow Condensed, sans-serif'
  },

  innerDivImgRight: {
    backgroundColor: 'red',
    height: '80%',
    width: '45%'
  },

  divText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '35vh',
    width: '100%'
  },

  innerDivText: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '80%',
    width: '90%',
    borderRadius: 'clamp(0.3125rem, 0.1281rem + 1.0352vw, 0.625rem)'
  },

  h2: {
    height: 'auto',
    width: '90%',
    textAlign: 'justify',
    fontSize: 'clamp(0.5rem, 0.1312rem + 2.0704vw, 1.125rem)',
    margin: 'clamp(0.2rem, 0.023rem + 0.9938vw, 0.5rem)'
  }
};

export default styleFirstPage;

const styleFirstPage = {
  //<div style={styleFirstPage.divText}>
  //Very small, mobile and tablets
  //Portrait
  divImg: {
    backgroundColor: 'orange',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 'clamp(17.5rem, 17.1257rem + 5.988vw, 20rem)',
    width: '100%'
  },

  //<img style={styleFirstPage.img}/>
  //Very small, mobile and tablets
  //Portrait
  img: {
    height: 'auto',
    width: '90%',
    margin: '1rem 0 1rem 0',
    borderRadius: 'clamp(0.3125rem, 0.1281rem + 1.0352vw, 0.625rem)'
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

  //<div style={styleFirstPage.divText}>
  //Very small, mobile and tablets
  //Portrait
  divText: {
    backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    minHeight: 'clamp(17.5rem, 17.1257rem + 5.988vw, 20rem)',
    width: '100%'
  },

  //<div style={styleFirstPage.innerDivTextNews}>
  //Very small, mobile and tablets
  //Portrait
  //newsPress.js
  innerDivTextNews: {
    backgroundColor: 'lightblue',
    height: '220px',
    width: '45%'
  },

  //<div style={styleFirstPage.innerDivText}>
  //Very small, mobile and tablets
  //Portrait
  //aboutMission.js
  innerDivText: {
    backgroundColor: 'var(--light-green)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 'clamp(10.625rem, 10.3443rem + 4.491vw, 12.5rem)',
    width: '90%',
    borderRadius: 'clamp(0.3125rem, 0.1281rem + 1.0352vw, 0.625rem)'
  },

  //<h2 style={styleFirstPage.h2} key={item}>
  //Very small, mobile and tablets
  //Portrait
  h2: {
    height: 'auto',
    width: '90%',
    textAlign: 'justify',
    fontSize: 'clamp(0.4375rem, 0.3533rem + 1.3473vw, 1rem)',
    margin: 'clamp(0.2rem, 0.023rem + 0.9938vw, 0.5rem)'
  }
};

export default styleFirstPage;

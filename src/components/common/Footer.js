import React from 'react'
import { Email, Linkedin, Twitter, Medium, Tableau } from './Social'

const style = {
  footer: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: '1em',
    padding: '0.5em 0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  socialSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '0.3em'
  },
  copyright: {
    fontFamily: '"Open Sans", sans-serif',
    margin: '0 0.6em 0 0.6em',
    flex: '0 1 auto',
    color: '#747474',
    fontWeight: '100',
    '@media only screen and (max-width: 700px)': {
      fontSize: '0.8em'
    },
    '@media only screen and (min-width: 700px)': {
      fontSize: '1em'
    }
  }
}

const Footer = () => {
  return (
    <footer className="footer">
      <p className="copyright" >© 2017 - Dan Gastineau</p>
      <div className="socialSection">
        <Email/>
        <Linkedin/>
        <Twitter/>
        <Medium/>
        <Tableau/>
      </div>
    </footer>
  );
};

export default Footer;

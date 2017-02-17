import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';


const Nav = () => {
  return (
    <nav className="nav"> 
      <IndexLink className="navText" to="/" activeClassName="active">home</IndexLink>
      <Link className="navText" to="/posts" activeClassName="active">posts</Link>
      <Link className="navText" to="/projects" activeClassName="active">projects</Link>
      <Link className="navText" to="/inspiration" activeClassName="active">inspiration</Link>
      <Link className="navText" to="/about" activeClassName="active">about</Link>
    </nav>
  );
};
  
export default Nav;

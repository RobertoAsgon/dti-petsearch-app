import React from 'react';
import './styles.css';
import logoDti from '../../assets/logo-dti-branca.png';
import { Link } from 'react-router-dom';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  return (
    <header className="fade-in-top">
      <container>
        <img src={logoDti} alt="logodti" />
        <div>
          <Link id="Nav" to="/"><SearchIcon style={{fontSize: 40}}/></Link>
          <Link id="Nav" to="/"><PostAddIcon style={{fontSize: 40}}/></Link>
        </div>
      </container>
    </header>
  );
}

export default Header;

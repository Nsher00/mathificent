import React from 'react';

function Footer (){
    return(
        <footer className="navbar fixed-bottom bg-dark">
        <div className="container-fluid">
          <a href="https://www.webucator.com" className="nav-link text-light">
            Copyright &copy; {new Date().getFullYear()} Webucator
          </a>
        </div>
      </footer>
    )
}

export default Footer;
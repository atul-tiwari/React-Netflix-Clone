import React, { useState, useEffect} from 'react'
import '../CSS/Navbar.css'

function NavBar() {

    const [show, handleShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
      return () => {
        window.removeEventListener("scroll");
      };
    }, []);


    return (
        <div className={show? "navbarNormal navbarBlack" : "navbarNormal"}>
            <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"
            alt="Netflix Logo"/>

            <img id="avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar Logo"/>
        </div>
    )
}

export default NavBar

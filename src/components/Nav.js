import React from 'react';
import {useState,useEffect} from 'react';
import "./Nav.css";

function Nav() {

    const [show,handleshow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
              handleshow(true)
            } else handleshow(false);
          });
          return () => {
            window.removeEventListener("scroll")
          }
        }, []);

    return (
        <div className={`nav ${show && "nav-black"}`}>
        <img 
            className="nav-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Neflix Logo" />
        <img 
            className="nav-avatar"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt="Neflix Avatar" />
        </div>
    )
}

export default Nav

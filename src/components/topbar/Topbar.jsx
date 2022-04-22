import "./topbar.scss"
import React, { useState } from "react";
import {Instagram, Facebook, GitHub} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">
              IP
            </a>
        </div>
        <div className="center">
            <a href = "#about" className="page">
              ABOUT
            </a>
            <a href = "#multimedia" className="page">
              MULTIMEDIA
            </a>
            <a href = "#contact" className="page">
              CONTACT
            </a>
            
        </div>
        <div className="right">
            <a href = "https://instagram.com/inespresa?utm_medium=copy_link" className="icon">
                <Instagram/>
            </a>
            <a href = "https://www.facebook.com/ines.pires.524" className="icon">
                <Facebook/>
            </a>
            <a href = "" className="icon">
                <GitHub/>
            </a>
        </div>  
      </div>
    </div>
  )
}


//tentar mudar topbar de transparente para preenchida
/* const Topbar =  () => {
  const [isScrolled, setIsScrolled] = useState(false);



  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0.0 );
    return () => (window.onscroll = null);
  };

  console.log(isScrolled);

  return (
    <div className={isScrolled ? "topbar scrolled" : "topbar"}>
      <div className="wrapper">
        <div className="left">
            <a href="#intro" className="logo">
              IP
            </a>
        </div>
        <div className="center">
            <a href = "#about" className="page">
              ABOUT
            </a>
            <a href = "#multimedia" className="page">
              MULTIMEDIA
            </a>
            <a href = "#contact" className="page">
              CONTACT
            </a>
            
        </div>
        <div className="right">
            <a href = "https://instagram.com/inespresa?utm_medium=copy_link" className="icon">
                <Instagram/>
            </a>
            <a href = "https://www.facebook.com" className="icon">
                <Facebook/>
            </a>
            <a href = "" className="icon">
                <GitHub/>
            </a>
        </div>  
      </div>
    </div>
  )
}

export default Topbar; */

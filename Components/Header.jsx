import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header({theme}) {
  const [isDark , setIsDark] = theme
  // if(isDark){
  //   document.body.classList.add('dark')
  // }
  // else{
  //   document.body.classList.remove('dark')
  // }
  return (
    <header className={`header ${isDark ? 'dark' : ''}`}>
      <div className="header-content">
        <h2 className="title">
          <Link to={"/"}>Where in the world ?</Link>
        </h2>
        <p className="theme" onClick={()=>{
          setIsDark(!isDark)
          localStorage.setItem('isDarkMode' , !isDark)
        }}>
          <span className="icon">
            <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`} />
          </span>{" "}
          {`${isDark ? 'Light' : 'Dark'}`} Mode
        </p>
      </div>
    </header>
  );
}

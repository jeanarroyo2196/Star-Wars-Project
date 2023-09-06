import React, { useState, useEffect } from "react";
import '../App.css'
import CardGenerator from "./CardGenerator";

function SmoothScrollLink({ to, children }) {
    const smoothScroll = (event) => {
      event.preventDefault();
      
      const target = document.querySelector(to);
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    };
  
    useEffect(() => {
      const link = document.querySelector(`a[href="${to}"]`);
      if (link) {
        link.addEventListener('click', smoothScroll);
        return () => link.removeEventListener('click', smoothScroll);
      }
    }, [to]);
  
    return (
      <a href={to}>{children}</a>
    );
}

const Navigation = () => {

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const naviClass = scrolled ? 'scrolled-down' : '';

  return (
      <header className={`top ${naviClass}`}>
          <img className="logo" src="https://cdn4.iconfinder.com/data/icons/helmet-1/154/droid-android-helmet-star-wars-512.png"></img>

          <img className="header-image" src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG16.png"></img>

          <nav>
              <ul>
                  <li><SmoothScrollLink to="#title-1"><a href="#title-1">Personajes</a></SmoothScrollLink></li>
                  <li><SmoothScrollLink to="#title-2"><a href="#title-2">Películas</a></SmoothScrollLink></li>
                  <li><SmoothScrollLink to="#title-3"><a href="#title-3">Planetas</a></SmoothScrollLink></li>
              </ul>
          </nav>
      </header>
    )
}

export default Navigation;
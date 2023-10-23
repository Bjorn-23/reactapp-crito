import React from 'react'

const NavMobile = () => {
  return (

    <><div id="myNav" className="overlay">
    
        <a tabindex="-1" href="javascript:void(0)" className="close-btn" onclick="closeNav()">&times;</a>

        <div className="overlay-content">
            <a tabindex="-1" href="index.html" className="active">Home</a>
            <a tabindex="-1" href="services.html">Services</a>
            <a tabindex="-1" href="news.html">News</a>
            <a tabindex="-1" href="articles.html">Articles</a>
            <a tabindex="-1" href="contact.html" className="btm">Contact</a>
        </div>

    </div>
        <span onclick="openNav()"><i className="fa-solid fa-bars"></i></span>
    </>
  )
}

export default NavMobile
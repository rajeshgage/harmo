import React, { useEffect, useState } from 'react';
import './Navbar.css'; // Import CSS file for styling
import logo from '../../assets/logo.png'
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        // Set isScrolled to true if scrollTop is greater than 0
        setIsScrolled(scrollTop > 60);
      };
  
      // Add scroll event listener when component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Remove scroll event listener when component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);      
    };
    return (
        <div className="navbar fixed-top" style={isScrolled ? { backgroundImage: 'linear-gradient(to top, rgb(235 220 220 / 97%) 0%, #100b0b 41%)' } : { backgroundImage: 'linear-gradient(to top, #ffffff03 0%, #ffffffe3 41%)' }}>
            <div className="icons ">
                <div className="icon" onClick={toggleSidebar}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="100px" xmlns="http://www.w3.org/2000/svg"><path d="M18 18V20H6V18H18ZM21 11V13H3V11H21ZM18 4V6H6V4H18Z"></path></svg>
                </div>
                <div className="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="20px" width="100px" xmlns="http://www.w3.org/2000/svg"><path d="M1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14a1.75 1.75 0 0 1-1.75 1.75H1.75A1.75 1.75 0 0 1 0 18.75v-14C0 3.784.784 3 1.75 3ZM1.5 7.412V18.75c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V7.412l-9.52 6.433c-.592.4-1.368.4-1.96 0Zm0-2.662v.852l10.36 7a.25.25 0 0 0 .28 0l10.36-7V4.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z"></path></svg></div>
            </div>
            <div className="logo">
                <img src={logo} alt='' className='logo-imgs' />
            </div>
            <div className="icons">
                <div className="icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="20px" width="200px" xmlns="http://www.w3.org/2000/svg"><path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z"></path></svg>
                </div>
                <div className="icon">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>
                </div>
            </div>
            {sidebarOpen && (
                <ul class="sidebar d-flex" >
                <li onClick={toggleSidebar}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"></path></svg> Close</li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Forum</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            )}
        </div>
    );
}

export default Navbar;

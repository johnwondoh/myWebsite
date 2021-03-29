import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";
// import { HashLink as HLink } from 'react-router-hash-link';

class WebNav extends Component {

    scrollToTop = () => {
        scroll.scrollToTop();
      };
    
    componentDidMount(){
        let routeLinks = document.querySelectorAll('.nav-link')
        routeLinks.forEach(link => {
            link.addEventListener('click', (e)=>{
                // alert('clicked')
                routeLinks.forEach(li => {
                    li.parentElement.classList.remove('active')
                    // console.log(li.parentElement())
                })
                // e.classList.add('active')
                link.parentElement.classList.add('active')
            })
        })

        function ScrollTo(name) {
            //init thread
            ScrollToResolver(document.getElementById(name));
          }
          
          function ScrollToResolver(elem) {
            var jump = parseInt(elem.getBoundingClientRect().top * .2);
            document.body.scrollTop += jump;
            document.documentElement.scrollTop += jump;
            //lastjump detects anchor unreachable, also manual scrolling to cancel animation if scroll > jump
            if (!elem.lastjump || elem.lastjump > Math.abs(jump)) {
              elem.lastjump = Math.abs(jump);
              setTimeout(function() {
                ScrollToResolver(elem);
              }, "100");
            } else {
              elem.lastjump = null;
            }
          }  
    }
    
    render() {
        
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark navbar-custom">
                    <a className="navbar-brand" href="#"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link className=" active nav-link" href="#home"
                                    activeClass="active"
                                    to="home#home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link " href="#home">HOME</a> */}
                                    HOME
                                </Link>
                            </li>
                            {/* <li class="nav-item active">
                                <a class="nav-link " href="#home">HOME</a>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" href="#about"
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link" href="#about">ABOUT</a> */}
                                    ABOUT
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#skills"
                                    activeClass="active"
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link" href="#skills" onclick="ScrollTo('skills')">SKILLS</a> */}
                                    SKILLS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#experience"
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link" href="#experience">EXPERIENCE</a> */}
                                    EXPERIENCE
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#education"
                                    activeClass="active"
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link" href="#education">EDUCATION</a> */}
                                    EDUCATION
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#awards"
                                    activeClass="active"
                                    to="awards"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link" href="#awards">AWARDS</a> */}
                                    AWARDS
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#contact"
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}>
                                    {/* <a className="nav-link" href="#contact">CONTACT</a> */}
                                    CONTACT
                                </Link>
                            </li>
                            {/* <li class="nav-item">
                                <a class="nav-link" href="#awards">AWARDS</a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default WebNav;
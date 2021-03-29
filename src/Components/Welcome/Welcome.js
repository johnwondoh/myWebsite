import React, { Component } from 'react';
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from './WebNav'
import { withStyles } from '@material-ui/styles'
import { FaLinkedin, FaFacebookSquare, FaGithub, FaStackOverflow, FaInstagram, } from 'react-icons/fa'
// import {  } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
// import { FaStackOverflow } from 'react-icons/fa'
// import { FaInstagram } from 'react-icons/fa'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
// import { MdLocalPhone } from 'react-icons/md'

// const imgPath1 = process.env.PUBLIC_URL + '/images/jarred-decker-7ERJvxUKftA-unsplash.jpg'
const imgPath2 = process.env.PUBLIC_URL + '/images/chris-ried-ieic5Tq8YMk-unsplash.jpg'
const styles = {
    welcome: {
        height: '100vh',
        width: '100vw',
        backgroundImage: `linear-gradient(to right, rgba(15, 32, 39, 0.7), rgba(32, 58, 67, 1), rgba(44, 83, 100, 0.9)), url(${imgPath2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    sectionStyle: {
        backgroundColor: 'black'
    },
    message: {
        // backgroundColor: 'purple',
        fontFamily: 'Teko', 
        color: '#F4F7F9',
        // color: '#e8ebe9',
        width: '75%',
        ['@media (max-width:992px)']: {
            width: '85%'
        },
        ['@media (max-width:768px)']: {
            width: '90%'
        },
        ['@media (max-width:576px)']: {
            width: '95%'
        },
        textAlign: 'center',
        
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        opacity: 1,
        zIndex: '100',
        textAlign: 'center',
        
        // border: '0.5px solid #8c8d8f',
        padding: '1em',
        backgroundImage: `linear-gradient(to right, rgba(15, 32, 39, 0.6), rgba(32, 58, 67, 0.9), rgba(44, 83, 100, 0.4))`,
        // boxShadow: '9px 9px 9px -1px rgba(0,0,0,0.75)',
        boxShadow: '6px 6px 6px -2px rgba(0,0,0,0.75)',

        '& h1': {
            fontSize: '5.5em',
            paddingBottom: '1px',
            // backgroundColor: 'red',
            
            ['@media (max-width:992px)']: {
                fontSize:'4.5em'
            },
            ['@media (max-width:768px)']: {
                fontSize:'3.5em'
            },
            ['@media (max-width:576px)']: {
                fontSize:'2.5em'
            },
            // ['@media (max-width:576px)']: {
            //     fontSize: '1.5em'
            // },
            // fontFamily: 'Cairo bold',
            fontFamily: 'Roboto',
            // color: '#e8ebe9',
            // borderTop: '3px solid gray',
            // borderBottom: '3px solid gray',
            '& span': {
                // color: 'red',
                fontSize: '70%'
            }
        },
        '& h3': {
            fontFamily: 'Open Sans',
            fontSize: '1.5em',
            marginBottom: '2em',
            // fontStyle: 'italic',
            textAlign: 'center'
            
        },
        '& p': {
            fontFamily: 'Open Sans',
            fontSize: '1.5em',
            fontStyle: 'italic',
            // marginBottom: '2em',
            marginTop: '2em',
            color: '#a3a3a3',
            width: '60%',
            margin: 'auto', 
            // backgroundColor: 'red',
            ['@media (max-width:992px)']: {
                fontSize: '1em',
                width: '70%'
            }
        },
        '& h2': {
            // backgroundColor: 'red',
            // opacity: '0.5',
            // backgroundImage: 'linear-gradient(to right, rgba(5, 148, 244,0.3), rgba(255,0,0,0.3))',
            marginBottom: '1.5em',
            // marginTop: '1.5em',
            fontFamily: 'Libre Franklin',
            paddingTop: '0.5em',
            paddingBottom: '0.5em',
            // fontSize: '2em',
            // ['@media (max-width:780px)']: {
            //     fontSize: '2.5em'
            // }
            // ['@media (max-width:576px)']: {
            //     fontSize: '1.5em'
            // }
            fontSize: '2em',
            ['@media (max-width:992px)']: {
                fontSize:'1.5em'
            },
            ['@media (max-width:768px)']: {
                fontSize:'1.2em'
            },
            ['@media (max-width:576px)']: {
                fontSize:'1.2em'
            },
        },
        
        // '& span': {
        //     height: 
        //     border: '1px solid red',
        //     borderRadius: '50%'
        // },
        '& a': {
            margin: 'auto 0.5em',
            color: 'white'
        },
        '& a:hover': {
            // margin: 'auto 0.5em',
            color: 'green'
        }
    },

    myMedia: {
        fontSize: '2em',
        margin: 'auto',
        marginTop: '1.5em',
        width: '15em',
        ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
            width: '80%',
            marginTop: '1em'
          },
        border: '1px solid white'
    },
    myIntro: {
        borderLeft: '5px solid #d9dadb',
        paddingLeft: '3em'
    },
    navbar: {
        color: 'white',
        backgroundColor: 'rgba(67, 70, 87, 0.5)',
        borderBottom: '1px solid white'
    },
    nav: {
        margin: 'auto',
        // color: 'red',
        '& navLink2': {
            color: 'red'
        }
    },
    // 'Nav.Link': {
    //     color: 'red',
    //     backgroundColor: 'white'
    // },
    // navLink2: {
    //     color: 'red'
    // },
    // '& .navbar-light .navbar-nav .nav-link': {
    '.nav-link': {
        color: 'red'
    }
}

class Welcome extends Component {
    
    render() {
        const { classes } = this.props
        return (
            <section id='home' className={classes.sectionStyle}>
                
                <Nav />
                <div className={classes.welcome}>
                    <div className={classes.message}>
                        <h3 className='text-monospace'>Welcome</h3>
                        <div className={classes.myIntro}>
                            <h1>JOHN WONDOH, <span>PhD</span></h1>
                            <h2 className='text-monospace'>Computer Scientist & Developer</h2>
                            <p>
                                I teach computer science courses, develop applications 
                                and do research in data science and process optimisation
                            </p>
                        </div>
                        <div className={classes.myMedia}> 
                            <span><a href='mailto: john.wondoh@mymail.unisa.edu.au' title='john.wondoh@mymail.unisa.edu.au'>< MdEmail /></a></span> 
                            <span><a href='tel:+61450027156'>< MdLocalPhone /></a></span>
                            <span><a href='https://github.com/johnwondoh' target='_blank' rel="noopener noreferrer">< FaGithub /></a></span>
                            <span><a href='https://stackoverflow.com/users/3559143/john' target='_blank' rel="noopener noreferrer">< FaStackOverflow /></a></span>
                        {/* </div>
                        <div> */}
                            <span><a href='https://www.linkedin.com/in/john-wondoh-aaa85337/' target='_blank' rel="noopener noreferrer"><FaLinkedin/></a></span>  
                            <span><a href='https://www.facebook.com/wonzy' target='_blank' rel="noopener noreferrer">< FaFacebookSquare/></a></span> 
                            <span><a href='https://www.instagram.com/jaywonzy/' target='_blank' rel="noopener noreferrer">< FaInstagram /></a></span>
                        </div>
                        {/* <img src={process.env.PUBLIC_URL + '/images/jarred-decker-7ERJvxUKftA-unsplash.jpg'}/> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Welcome);
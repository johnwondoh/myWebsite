import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { removeData } from 'jquery';

const styles = {
    section: {
        background: '#E0EAFC',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, rgba(207, 222, 243, 0.3), rgba(224, 234, 252, 0.3))',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, rgba(207, 222, 243, 0.3), rgba(224, 234, 252, 0.3))', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    },
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
        // backgroundColor: 'blue',
        // background: '#abbaab',  /* fallback for old browsers */
        // background: '-webkit-linear-gradient(to right, #ffffff, #abbaab)',  /* Chrome 10-25, Safari 5.1-6 */
        // background: 'linear-gradient(to right, #ffffff, #abbaab)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // background: '#E0EAFC',  /* fallback for old browsers */
        // background: '-webkit-linear-gradient(to right, rgba(207, 222, 243, 0.3), rgba(224, 234, 252, 0.3))',  /* Chrome 10-25, Safari 5.1-6 */
        // background: 'linear-gradient(to right, rgba(207, 222, 243, 0.3), rgba(224, 234, 252, 0.3))', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        '& h2': {
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '3em',
            color: '#2488ed'
        },
        '& div': {
            backgroundColor: 'red',
            height: '2px',
            width: '5rem',
            margin: 'auto'
        },
        '& p': {
            padding: '0.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em',
            width: '65%',
            ['@media (max-width:992px)']: {
                width: '75%'
            },
            ['@media (max-width:780px)']: {
                width: '85%'
            },
            ['@media (max-width:576px)']: {
                width: '95%'
            },
            margin: 'auto',
            // boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 -12px 30px 0px rgba(0,0,0,0.075)',
            // color: 'white',
            textAlign: 'center',
            // marginBottom: '0.5em'
            '& hr': {
                border: '0',
                height: '1.5px',
                width: '50px',
                marginBottom: '0',
                backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
            }
        },
        '& img': {
            marginTop: '2em',
            marginBottom: '1em',
            width: '15em',
            borderRadius: '50%',
            boxShadow: '2px 6px 10px rgba(0, 0, 0, 0.3)',
            // boxShadow: '5px 5px 5px 2px rgba(0, 0, 0,0.5)'
        }
        
    },
    // awards: {
    //     // backgroundColor: 'blue',
    //     width: '85%',
    //     margin: 'auto'
    // }
    card: {
        // backgroundColor: 'rgba(207, 222, 243, 0.3)',
        // backgroundColor: 'rgba(32, 58, 67, 0.9)',
        width: '350px',
        paddingTop: '10px',
        margin: '7px',
        // border: '1px solid red',
        borderRadius: '12px',
        // boxShadow: '0 3rem 6rem rgba(0, 0, 0, .1)',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
        // backgroundColor: 'black',
        '& img': {
            width: '100%',
            display: 'block',
            height: '18rem',
            objectFit: 'scale-down'
        },
        '& p': {
            paddingLeft: '10px',
        }
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap', 
        margin: 'auto',
        // backgroundColor: 'red',
        paddingBottom: '2.5em',
        // width: '65%',
        // width: '75%',
        //     ['@media (max-width:992px)']: {
        //         width: '85%'
        //     },
        //     ['@media (max-width:780px)']: {
        //         width: '95%'
        //     },
        //     ['@media (max-width:576px)']: {
        //         width: '95%'
        //     },
    }
}

class About extends Component {

    render() {
        const { classes } = this.props
        let imgPath = process.env.PUBLIC_URL + '/images/Lap_Photo.jpg'
        let dsPath = process.env.PUBLIC_URL + '/images/about/data_science.png'
        let edPath = process.env.PUBLIC_URL + '/images/about/teacher.png'
        let dePath = process.env.PUBLIC_URL + '/images/about/dev4.png'

        const leftBorderStyle = {
            // borderLeft: '9px ridge rgb(13, 117, 212)',
            // backgroundColor: 'rgba(215, 231, 245, 1)',
        }
        const rightBorderStyle = {
            // borderRight: '9px ridge rgb(13, 117, 212)',
        }
        return (
            <section id='about' className={classes.section}>
                <div className={classes.sectionHeader}>
                <h2>About me</h2>
                <div></div>
                <img src={imgPath} alt="John's profile picture"/>
                <p style={leftBorderStyle}>
                    I am a <em>Computer Scientist</em> with a PhD from the AI and Software Engineering Lab at the University of South Australia (UniSA). 
                     I've collaborated with industry partners such the Data-to-Decision (D2D) CRC, the 
                    Defence Science and Technology (DST), and the Australian Federal Police. 
                     I have advanced research experience, a problem-solving mentality, and practical programming skills.
                    {/* <hr /> */}
                </p>
                
                </div>
                <div className={classes.cardContainer}>
                    <div className={classes.card}>
                        <img src= {dsPath}/>
                        <p>
                            {/* I am a Data Scientist with ML and analytics
                            techniques. I'v in several projects for organisations such as the Data-to-Decision CRC,
                            Defence Science and Technology, Australian Federal Police, and UniSA. */}
                            I am a Data Scientist and Machine Learning expert with practical experience using ML and analytics techniques in several projects for organisations such as the D2D CRC, DST, AFP, and UniSA.
                        </p>
                    </div>
                    <div className={classes.card}>
                        <img src= {edPath}/>
                        <p>
                            I am an educator and teacher. I currently work as the Lecturer and Course Coordinator for Database Fundamentals
                            and Web Development at UniSA.
                        </p>
                    </div>
                    <div className={classes.card}>
                        <img src= {dePath}/>
                        <p>
                            I am an application developer with full-stack developing experience 
                            in Web, Mobile, and Desktop applications domains.
                        </p>
                    </div>
                </div>
                {/* <Row className={classes.cardContainer}>
                    <Col lg={4} sm={6} xs={12} className={classes.card}>
                        <img src='/images/about/data_science.png' />
                        <p>
                            I am a Data Scientist with ML and analytics
                            techniques. I'v in several projects for organisations such as the Data-to-Decision CRC,
                            Defence Science and Technology, Australian Federal Police, and UniSA.
                            
                        </p>
                    </Col>
                    <Col lg={4} sm={6} xs={12} className={classes.card}>
                        <img src='/images/about/teacher.png' />
                        <p>
                            I am an educator and I am the Lecturer and Course Coordinator for Database Fundamentals
                            and Web Development at UniSA.
                        </p>
                    </Col>
                    <Col lg={4} sm={6} xs={12} className={classes.card}>
                        <img src='/images/about/dev4.png' />
                        <p>
                            I am a developer, with experience full-stack developing Web, Mobile, and Desktop
                            applications.
                        </p>
                    </Col>
                </Row> */}
            </section>
        );
    }
}

export default withStyles(styles)(About);
import React, { Component } from 'react';
import EachEducation from './EachEducation'
import Row from 'react-bootstrap/Row'
import { withStyles } from '@material-ui/styles'
import { v4 as uuidv4 } from 'uuid'


const patternPath = process.env.PUBLIC_URL + '/images/email-pattern/email-pattern.png'
const styles = {
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
        // color: 'white',
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
            paddingTop: '1.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em',
            // color: 'white',
            width: '70%',
            margin: 'auto',
            ['@media (max-width:780px)']: {
                width: '85%'
            }
        }
        
    },
    sectionStyle: {
        // background: 'rgb(221,233,249)',
        // background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(238,245,251,0.5) 50%, rgba(229,244,252,0.5) 80%, rgba(221,229,249,0.5) 100%)',
        // backgroundImage: `linear-gradient(0deg, rgba(101, 157, 189,0.4), rgba(232, 234, 237,0.7)), url(${patternPath})`,
        backgroundSize: '60em',
        '& Container': {
            paddingBottom: '10rem'
        },
        // marginTop: '2rem'
    },
    container: {
        // background: 'blue',
        width: '65%',
        // width: '51%',
        ['@media (max-width:992px)']: {
            width: '85%'
        },
        ['@media (max-width:780px)']: {
            width: '85%'
        },
        ['@media (max-width:576px)']: {
            width: '90%'
        },
        margin: 'auto',
        paddingBottom: '2rem'
    }
}

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education : [
                {
                    institution: 'University of South Australia',
                    programme: 'Computer and Information Science',
                    award: 'Doctor of Philosophy',
                    startYear: 2014,
                    endYear: 2018,
                    logo:'/images/companies/unisa.png',
                    moreInfo: 'I did my PhD research in AI and Software Engineering Lab at UniSA. My research work focused on Business Process Optimisation under dynamic conditions.',
                },
                {
                    institution: 'University of Mines & Technology',
                    programme: 'Electrical & Electronic Engineering',
                    award: 'Bachelor of Science',
                    startYear: 2008,
                    endYear: 2012,
                    logo:'/images/companies/UMaT-logo-238x300.jpg',
                    moreInfo: 'I completed with a High Distinction'
                }
            ]
        }
    }
    
    render() {
        let educations = this.state.education.map(
            e => <EachEducation institution={e.institution}
                    programme={e.programme}
                    award={e.award}
                    startYear={e.startYear}
                    endYear={e.endYear}
                    moreInfo={e.moreInfo}
                    logo={e.logo} key={uuidv4()}/>)
        const { classes} = this.props
        return (
            <section id='education' className={classes.sectionStyle}>
                <div className={classes.sectionHeader}>
                    <h2>Education</h2>
                    <div></div>
                    <p>I've had the opportunity to study in formal 
                        institution and have also made use of several online tools 
                        to acquire knowledge. Some of these platforms include edX, Udemy, Coursera, and youtube.
                        My formal education took place in the following institution...  
                    </p>
                </div>
                <div className={classes.container}>
                    <Row>
                        {educations}
                    </Row>
                </div>

                {/* <div className={classes.sectionHeader}>
                    <p> 
                        I've also taken a number or course to improve my skillset and add new skillset
                        on edX, Udemy, Coursera, youtube, among others  
                    </p>
                </div> */}
            </section>
        );
    }
}

export default withStyles(styles)(Education);

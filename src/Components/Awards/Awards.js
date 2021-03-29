import React, { Component } from 'react';
import EachAward from './EachAward'
import Row from 'react-bootstrap/Row'
import { withStyles } from '@material-ui/styles'
import { v4 as uuidv4 } from 'uuid'

const patternPath = process.env.PUBLIC_URL + '/images/email-pattern/email-pattern.png'

const styles = {
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
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
            width: '70%',
            margin: 'auto',
            ['@media (max-width:780px)']: {
                width: '85%'
            }
        }
        
    },
    sectionStyle: {
        // backgroundColor: 'black',
        // backgroundColor: '#e1e9ed',
        backgroundImage: `linear-gradient(0deg, rgba(101, 157, 189,0.4), rgba(230, 239, 252,0.6)), url(${patternPath})`,
        backgroundSize: '60em',
        // background: 'rgb(221,233,249)',
        // background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(238,245,251,0.5) 50%, rgba(229,244,252,0.5) 80%, rgba(221,229,249,0.5) 100%)',
        paddingBottom: '3em'
        // marginTop: '2rem'
    },
    awards: {
        // backgroundColor: 'blue',
        width: '65%',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        ['@media (max-width:1200px)']: {
            width: '80%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        ['@media (max-width:992px)']: {
            width: '80%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
        },
        ['@media (max-width:780px)']: {
            width: '95%',
            display: 'grid',
            gridTemplateColumns: '1fr',
        },
    }
}

class Awards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            awards : [
                {
                    award: 'High Commendation',
                    institute: 'The Mike Miller Medal - University of South Australia',
                    note: 'Received in recognition of the contributions present in my PhD Thesis',
                    image: 'highcommendation.jpg'
                },
                {
                    award: 'Pass Forthwith Recommendation',
                    institute: 'University of South Australia',
                    note: 'I received a pass without correction recommendation for my PhD thesis',
                    image: 'Best-Paper-APCCM-Certificate-001.jpg'
                },
                {
                    award: "University President's Scholarship (UPS)",
                    institute: 'University of South Australia',
                    note: 'Scholarship awarded for my Ph.D. sponsorship'
                },
                {
                    award: "Data to Decision (D2D) CRC Scholarship",
                    institute: 'Data to Decision (D2D) CRC',
                    note: 'Ph.D. sponsorship for contributions to D2D CRC'
                }
            ]
        }
    }
    
    render() {
        let awards = this.state.awards.map(a => <EachAward 
        award={a.award} institute={a.institute}
        note={a.note} image={a.image} key={uuidv4()}
        />)
        const { classes } = this.props
        return (
            <section className={classes.sectionStyle} id='awards'>
                <div className={classes.sectionHeader}>
                    <h2>Awards & Scholarships</h2>
                    <div></div>
                    <p>
                        I've received some awards and scholarships during and after 
                        my education. Here are a few notable ones. 
                    </p>
                </div>
                
                <div className={classes.awards}>
                    {/* <Row> */}
                        {awards}
                    {/* </Row> */}
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Awards);
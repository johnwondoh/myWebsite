import React, { Component } from 'react';
import EachFramework from './EachFramework'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { withStyles } from '@material-ui/styles'
import { v4 as uuidv4 } from 'uuid'

// const patternPath = process.env.PUBLIC_URL + '/images/checkerboard-cross/checkerboard-cross.png'
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
    skillStyle: {
        width: '55%',
        margin: 'auto',
        '& h3': {
            textAlign: 'center',
            marginBottom: '2em'
        },
        ['@media (max-width:780px)']: {
            width: '85%'
        },
        ['@media (max-width:576px)']: {
            width: '90%',
        }
    },
    sectionStyle: {
        // width: '75%',
        // margin: 'auto',
        // '& h3': {
        //     textAlign: 'center',
        //     marginBottom: '2em'
        // },
        // backgroundImage: `linear-gradient(to right bottom, rgb(255, 255, 255), rgba(196, 219, 246, 0.3), rgb(255, 255, 255))`,
        paddingBottom: '2.5em'

    },

    componentWraper: {
        // margin: '40px', /* just for contrast */
        marginTop: '2.5em',
        position: 'relative',
        // border: '1px solid #e7e3d4',
        // border: '3px solid #2488ed',
        // backgroundColor:'#c2cad0',
        // backgroundColor:'#41B3A3',
        // backgroundImage: `url(${patternPath})`,
        // backgroundImage: `linear-gradient(0deg, rgba(133, 144, 170, 0.5), rgba(133, 144, 170, 0.5)), url(${patternPath})`,
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255,0.5), rgba(255, 255, 255,0.5)), url(${patternPath})`,
        borderRadius: '12px',
        // boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        padding: '20px',
        paddingTop:'40px'
      },
      
    componentTitle: {
        position: 'absolute',
        top: '-1em',
        // background: '#cccccc',
        // backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255), rgba(255, 255, 255))`,
        // background: '#fff',
        padding: '0.5em 1em',
        border: '1px solid #e7e3d4',
        backgroundColor: 'rgb(30, 61, 82)',
        boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 100px rgba(0, 0, 0, 0.06), 0 20px 30px rgba(0, 0, 0, 0.12)',
          
        fontFamily: 'Open Sans',
        // color: '#005fa3',
        color: 'white',
        // fontWeight: 'bold',
        // fontWeight: 'bold',
        // border: '3px solid #d1d7e0',
        // border: '3px solid #2488ed',
        borderRadius: '5%',
        fontSize: '1.4em'
      }
}

class Frameworks extends Component {
    constructor(props){
        super(props)
        // const imgPath1 = process.env.PUBLIC_URL
        this.state = {
            skills: [
                {
                    title: 'Javascript',
                    rate: 4.5,
                    imageUrl: '/images/logos/JavaScript-logo.png',
                    type: 'language'
                },
                {
                    title: 'HTML 5',
                    rate: 4.5,
                    imageUrl: '/images/logos/HTML5.jpg',
                    type: 'language'
                },
                {
                    title: 'CSS 3',
                    rate: 4.5,
                    imageUrl: '/images/logos/CSS-3-svg.png',
                    type: 'language'
                },
                {
                    title: 'Python',
                    rate: 4.5,
                    imageUrl: '/images/logos/Python-logo-notext.svg',
                    type: 'language'
                },
                {
                    title: 'React',
                    rate: 4,
                    imageUrl: '/images/logos/React-icon.svg',
                    type: 'library'
                    
                },
                {
                    title: 'Django',
                    rate: 4,
                    imageUrl: '/images/logos/django.png',
                    type: 'library'
                    
                },
                {
                    title: 'MongoDB',
                    rate: 5, 
                    imageUrl: '/images/logos/mongodb.png',
                    type: 'database'  
                },
                {
                    title: 'Bootstrap',
                    rate: 5, 
                    imageUrl: '/images/logos/Bootstrap_logo.svg.png',
                    type: 'library'   
                },
                {
                    title: 'AngularJS',
                    rate: 5, 
                    imageUrl: '/images/logos/angularjs-logo.png',
                    type: 'library'  
                },
                {
                    title: 'C#',
                    rate: 5, 
                    imageUrl: '/images/logos/C_Sharp_logo.svg.png',
                    type: 'language' 
                },
                {
                    title: 'Java',
                    rate: 5, 
                    imageUrl: '/images/logos/Java_programming_language_logo.svg.png',
                    type: 'language'   
                },
                {
                    title: 'Flask',
                    rate: 5, 
                    imageUrl: '/images/logos/flask-seeklogo.com.svg',
                    type: 'library'   
                },
                {
                    title: 'NodeJS',
                    rate: 5, 
                    imageUrl: '/images/logos/Node.js_logo.svg.png',
                    type: 'language'  
                },
                {
                    title: 'PostgreSQL',
                    rate: 5, 
                    imageUrl: '/images/logos/Postgresql_elephant.svg.png',
                    type: 'database'    
                },
                {
                    title: 'MS SQL Server',
                    rate: 5, 
                    imageUrl: '/images/logos/microsoft-sql-server.svg',
                    type: 'database'    
                },
                {
                    title: 'SQLite',
                    rate: 5, 
                    imageUrl: '/images/logos/SQLite370.svg.jpg',
                    type: 'database'    
                },
                {
                    title: 'TensorFlow',
                    rate: 5, 
                    imageUrl: '/images/logos/TensorFlowLogo.svg.png',
                    type: 'library'    
                },
                {
                    title: 'Pandas',
                    rate: 5, 
                    imageUrl: '/images/logos/pandas-logo-300.png',
                    type: 'library'   
                },
                {
                    title: 'SAS',
                    rate: 5, 
                    imageUrl: '/images/logos/SAS Software Logo.jpg',
                    type: 'software'   
                },
                {
                    title: 'Power BI',
                    rate: 5, 
                    imageUrl: '/images/logos/Power_bi_logo_black.svg.png',
                    type: 'software'     
                },
                {
                    title: 'Tableau',
                    rate: 5, 
                    imageUrl: '/images/logos/tableau_logo_3_1.jpg',
                    type: 'software' 
                },
                {
                    title: 'Git',
                    rate: 5, 
                    imageUrl: '/images/logos/Git-Icon-1788C.png',
                    type: 'software'     
                },
                {
                    title: 'Entity Framework',
                    rate: 5, 
                    imageUrl: '/images/logos/entityframework.png',
                    type: 'library'  
                },
                {
                    title: 'MS .NET',
                    rate: 5, 
                    imageUrl: '/images/logos/Microsoft_.NET_logo.png',
                    type: 'library'  
                },
                {
                    title: 'Weka',
                    rate: 5, 
                    imageUrl: '/images/logos/weka.png',
                    type: 'software'     
                },
                {
                    title: 'Adobe Photoshop',
                    rate: 5, 
                    imageUrl: '/images/logos/Adobe_Photoshop_CC_icon.svg.png',
                    type: 'software'  
                },
                {
                    title: 'Scikit-learn',
                    rate: 5, 
                    imageUrl: '/images/logos/Scikit_learn_logo_small.svg.jpg',
                    type: 'library'   
                }
            ]
        }
    }

    createCategory(catName, skillList){
        const { classes } = this.props
        let category = <div className={classes.componentWraper}> 
                <h3 className={classes.componentTitle}>{catName}</h3> 
                <Row> {skillList.map(
                s => <EachFramework title={s.title} 
                imageUrl={s.imageUrl} 
                rate={s.rate} type={s.type} 
                key={uuidv4()}/>
                ) } </Row></div>
        return category 
    }

    render() {
        let skillLanguage = this.state.skills.filter(s => s.type == 'language')
        let skillLibrary = this.state.skills.filter(s => s.type == 'library')
        let skillDatabase = this.state.skills.filter(s => s.type == 'database')
        let skillSoftware = this.state.skills.filter(s => s.type == 'software')

        let language = this.createCategory('Programming', skillLanguage)
        let library = this.createCategory('Libraries & Frameworks', skillLibrary)
        let database = this.createCategory('Databases', skillDatabase)
        let software = this.createCategory('Software & Tools', skillSoftware)
        const {classes} = this.props
        return (
            <section id='skills' className={classes.sectionStyle}>
                <div className={classes.sectionHeader}>
                    <h2>Skills & Tools</h2>
                    <div></div>
                    <p>
                        I've gained some skills spanning over 
                        several disciplines. These include Web development,
                        Business Process Management, Data Science, and Systems Analysis. 
                        Some of the tools I use are: 
                    </p>
                </div>
                {/* <Row> */}
                    {/* {skills} */}
                <div className={classes.skillStyle}>
                    {language}
                    {library}
                    {database}
                    {software}
                </div>
                    {/* <EachFramework title={this.state.title} 
                    imageUrl={this.state.imageUrl}/> */}
                {/* </Row> */}
            </section>
        );
    }
}

export default withStyles(styles)(Frameworks);
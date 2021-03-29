import React, { Component } from 'react';
import EachExperience from './EachExperience';
import Industry from './Industry';
import Projects from './Projects';
import Publications from '../Publications/Publications';
import Row from 'react-bootstrap/Row';
import { withStyles } from '@material-ui/styles';
import { v4 as uuidv4 } from 'uuid';
import { AiFillCaretDown } from "react-icons/ai";

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
        },
    },
    partners: {
        width: '80%',
        margin: 'auto'
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
    experienceFlex: {
        width: '70%',
        margin: 'auto',
        // display: 'grid',
        // gridTemplateColumns: '500px 500px',
        ['@media (max-width:1200px)']: {
            width: '90%',
            // display: 'grid',
            // gridTemplateColumns: '1fr 1fr',
        },
        ['@media (max-width:992px)']: {
            width: '95%',
            // display: 'grid',
            // gridTemplateColumns: '1fr 1fr',
        },
        ['@media (max-width:780px)']: {
            width: '95%',
            display: 'grid',
            gridTemplateColumns: '1fr',
        },
    }
    // experiences: {
    //     width: '85%',
    //     margin: 'auto'
    // }
}

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experience : [
                {
                    position: 'Course Coordinator & Lecturer',
                    postitionDetails: 'Database Fundamentals | Web Development ',
                    subTitle: 'Information Technology Bachelor Degrees',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                        'I lecture Information Technology undergraduate students with specialisation in Software Engineering and Networking and Cybersecurity on Database Fundamentals and Web Development. Some of the tools, principles, and design architectures I teach in both courses include Database Design, Structure Query Language, Security, HTML5, CSS3, JavaScript, C#, ASP.NET, AngularJS, MVC, MVVM, Separation of Concerns, among others.',
                        'I prepare new materials for the course and update existing materials to ensure that they meet modern web development standards.',
                        'I handle hands-on practical sessions for Database Fundamentals and Web edvelopment students. During these sessions, students are required to practice the knowledge acquired during class. I also prepare the teaching materials for the weekly practical sessions.',
                        'I manage the teaching team responsible for various academic activities including tutoring, marking, etc.'
                        ]
                },
                {
                    position: 'Research Scientist',
                    postitionDetails: 'Defence Science and Technology (DST)',
                    subTitle: 'AI and Software Engineering Lab',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                                'I investigated the domain of Self-aware, Context-aware, Self-Integrating, Self-Adaptive Systems of Systems. This investigation explored these areas to determine gaps, and to identify existing solutions that may be useful to DST.',
                                'I contributed in the writing of a technical report on our research findings, and consequently towards a peer-reviewed publication. '                
                    ]
                },
                {
                    position: 'Academic Research Assistant',
                    postitionDetails: 'Data-to-Decision (D2D) CRC',
                    subTitle: 'AI and Software Engineering Lab',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                          'I applied the theory of the framework presented in my thesis in the context of an investigation.',
                          'I presented a data-driven solution for the optimisation of an investigation based on Australian Federal Police (AFP) use cases.',
                          'I used exploratory data analysis for the preliminary analysis of the AFP use case to understand the context. We primarily used Data Visualisation techniques to determine outliers in the data, to aid as in determining the structure of the data, as well as to discover some patterns that can help us in the next phase.',
                          'We used machine learning techniques for pattern recognition in the event data (logs) and process mining techniques to determine the pre-existing models. The output of the learning phase was used to implement a model tailored for investigation processes. The model ensures that the processes are optimised and robust.',
                          'I implemented the solution using sound software development skills and presented the solution as a library to the Data-to-Decision CRC.',
                          'My implemented solution was adopted as part of the strategic plan that the D2D CRC was preparing for the AFP. AS a result, my models were designed to work seamlessly with all other solutions that were provided by other researchers in the project.',
                          'I worked on the implementation of the extended framework for performance evaluation towards a publication.',
                          'I wrote a D2D CRC report and documentation on the applications of the framework on an investigation.'     
                    ]
                },
                {
                    position: 'PhD Candidate | Research Scientist',
                    postitionDetails: 'Data-to-Decision (D2D) CRC',
                    subTitle: 'AI and Software Engineering Lab',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                         'I worked on the development of methods and algorithms to improve the robustness of process management software and to optimise the management of dynamism during process runtimes in these organisational software solutions.',
                         'I used multiple real-world use cases to validate and test the developed solutions in a data-driven way- and also to ensure that the solutions operated as expected within the deployed software systems. Some of the real-world cases used were home care organisational processes and federal investigative processes because of their sufficient complexities.',
                         'I used several data science techniques such as exploratory data analysis, data visualisation, machine learning (SVM, Decision Trees, and  Neural Nets) and process mining, to identify previously unknown patterns, to determine the possible causes of these patterns (and their effect on the process) to provide solutions to reduce the occurrence of patterns that are detrimental to the process. We added these models to our solution to improve on-the-fly robustness.',
                         'The solutions were implemented using sound software development principles. The outputs of this project were implemented (and well-documented) libraries and APIs were presented to our industry partners.',
                         'I built a desktop GUI application to provide an interface for the various solutions so that our Stakeholders can be given a demonstration of the benefits the solutions.',
                         "I ensured that the solution that I designed and implemented fit within the scope of the industry partner's project, and could be deployed with minimal effort to work with existing components." 
                    ]
                },
                {
                    position: 'Course Tutor',
                    postitionDetails: 'Practical Supervisor | Workshop Supervisor | ExaminerC',
                    subTitle: 'UniSA STEM',
                    company: 'University of South Australia',
                    town: 'Adelaide',
                    country: 'Australia',
                    responsibilities: [
                         'Course tutored: Relational Databases and Warehouses (1 year - Masters), Problem Solving and Programming (1 year - undergraduate), Business Intelligence (1 year - undergraduate), Enterprise Systems (2years - undergraudate and masters),  IT Fundamentals (1 year - undergraduate), Design Thinking and Digital Innovation (1 year - undergraduate), and Business Systems Analysis (1 year - Masters). The tool covered: SAP, Python, Power BI, Tableau and Weka.'
                    ]
                }
            ],
            industry: [
                {
                    name: 'Data to Decisions CRC',
                    abreviation: 'D2D CRC',
                    src: '/images/companies/D2DCRC-logo.jpg'
                },
                {
                    name: 'Defence Science and Technology',
                    abreviation: 'DST',
                    src: '/images/companies/DST2.jpg'
                },
                {
                    name: 'University of South Australia',
                    abreviation: 'UniSA',
                    src: '/images/companies/unisa.png'
                }
            ],
            projects: [
                {
                    title: 'Bi-temporal event driven process interoperability',
                    projectName: 'Integrated Law Enforcement',
                    owner: 'D2D CRC',
                    subOwner: 'Australian Federal Police',
                    position: 'Research Asistant',
                    company: 'UniSA'
                }
            ],
            viewPublications: false,
            viewProjects: false
        }
        this.showPublications = this.showPublications.bind(this)
    }

    showPublications(){
        let changeView = !this.state.viewPublications
        console.log(changeView)
        this.setState({viewPublications: changeView})
    }
    
    render() {
        let experience = this.state.experience.map((e, i) => <EachExperience 
                    position={e.position} postitionDetails={e.postitionDetails}
                    subTitle={e.subTitle}
                    company={e.company} town={e.town}
                    country={e.country} responsibilities={e.responsibilities}
                    index={i} key={uuidv4()}/>)
        
        let industries = this.state.industry.map(e => <Industry 
                    name={e.name} abreviation={e.abreviation} src={e.src} 
                    key={uuidv4()}
                    />)

        let projects = this.state.projects.map(e => <Projects 
                    title={e.title} projectName={e.projectName}
                    owner={e.owner} subOwner={e.subOwner}
                    position={e.position} company={e.company}
                    key={uuidv4()}
                    />)

        const buttonStyle = {
            border: '0.16em solid rgba(255,255,255,0)',
            backgroundColor: 'rgb(5, 45, 94)',
            borderRadius: '2em',
            boxSizing: 'border-box',
            textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
            transition: 'all 0.2s'
            // backgroundColor
        }
        
        const { classes } = this.props
        return (
            <section className={classes.sectionStyle} id='experience'>
                <div className={classes.sectionHeader}>
                    <h2>Work Experience</h2>
                    <div></div>
                    <p>I've had quite some experience in diverse areas within the domain 
                        of Computer Science and Information Systems. Some notable experiences 
                        include the following ...
                    </p>
                </div>
                <div className={classes.experienceFlex}>
                     <Row>
                        {experience}
                    </Row>
                </div>
                <div className={classes.sectionHeader}>
                    <p>I've worked with several industry partners including: 
                    </p>
                </div>
                <div className={classes.partners}>
                    <Row>
                        {industries}
                    </Row>
                </div>

                {/* projects can be added later */}
                {/* {projects} */}
                <div className={classes.sectionHeader}>
                    <p>
                        I have some peer reviewd publications.
                    </p>
                    <button style={buttonStyle} type="button" 
                    className="btn btn-primary btn-lg mt-3"
                    onClick={this.showPublications}> 
                        click to see my publications :) <AiFillCaretDown/>
                    </button>
                </div>
                { this.state.viewPublications && <Publications />}
                
            </section>
        );
    }
}

export default withStyles(styles)(Experience);
import React, { Component } from 'react';
import { FaLinkedin, FaFacebookSquare, FaGithub, FaStackOverflow, FaInstagram, FaGlassMartiniAlt, } from 'react-icons/fa'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import { withStyles } from '@material-ui/styles'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import emailjs from 'emailjs-com'
import $ from 'jquery';
// import ContainerFuild from 'react-bootstrap/Col'

const styles = {
    sectionHeader: {
        paddingTop: '2em',
        paddingBottom: '2em',
        textAlign: 'center',
        '& h2': {
            textAlign: 'center',
            fontFamily: 'Open Sans',
            fontSize: '3em',
            color: '#edf5e1'
            // color: '#2488ed'
        },
        // '& div': {
        //     backgroundColor: 'red',
        //     height: '2px',
        //     width: '5rem',
        //     margin: 'auto'
        // },
        '& p': {
            paddingTop: '1.5em',
            fontFamily: 'Open Sans',
            fontSize: '1.1em',
            lineHeight: '1.7em'
        }
    
        
    },
    sectionStyle: {
        // height: '20em',
        // backgroundColor: 'rgb(47, 47, 162, 0.5)'
        // backgroundColor: 'rgb(101, 157, 189)'
        // backgroundColor: 'black'
        background: '#0F2027',  /* fallback for old browsers */
        background: '-webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027)',  /* Chrome 10-25, Safari 5.1-6 */
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        // ['@media (max-width:780px)']: {
        //     padding: '2em auto'
        // },
        '& h3': {
            color: 'yellow',
            fontStyle: 'italic' 
        }
    },
    formStyle: {
        fontFamily: 'Open Sans',
        // m: '2em'
        // width: '85%'
        
    },
    connectIcon: {
        border: '2px solid white',
        height: '70px',
        width: '70px',
        borderRadius: '50%',
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '1em',
        textAlign: 'center',
        

        '& a': {
            color: 'white',
            margin: 'auto',
            fontSize: '2.5em',
            paddingBottom: '0.2em',
            '&:hover, :visited':{
                color: 'green'
            }
            // textAlign: 'center',
            // verticalAlign: 'middle'
        }
    },
    contactInfo: {
        paddingBottom:'1.5em',
        paddingTop:'1.5em',
        borderBottom: '1px solid white',
        width: '80%',
        margin: 'auto',
        marginBottom: '1em',
        '& a': {
            color: 'white',
            fontSize: '1.3em'
        }
    },
    errorMessage: {
        // backgroundColor: 'rgba(245, 224, 118, 0.7)'
        background: 'rgb(42,35,158)',
        background: 'linear-gradient(90deg, rgba(42,35,158,0) 0%, rgba(245,210,102,0.7) 35%, rgba(242,208,114,0.7) 58%, rgba(0,212,255,0) 100%)'
    },
    successMessage: {
        // backgroundColor: 'rgba(245, 224, 118, 0.7)'
        background: 'rgb(42,35,158)',
        background: 'linear-gradient(90deg, rgba(42,35,158,0) 0%, rgba(77,199,33,1) 35%, rgba(80,207,33,1) 58%, rgba(0,212,255,0) 100%)'
    }
}

class Contact extends Component {
    constructor(props) {
        super (props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            message: '',
            error: false,
            success: false 
        }
    }   

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        // alert('submitted')
        e.preventDefault()

        // if (!this.validateMail()) {
        //     return;
        //   }
      const templateParams = {
            from_name: this.state.name + " (" + this.state.email + ") and (" + this.state.phoneNumber + ")" ,
            to_name: 'johnwondoh@gmail.com',
            feedback: this.state.message
          };
    }

    sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target)

        const templateParams = {
            from_name: this.state.name + " (" + this.state.email + ") and (" + this.state.phoneNumber + ")" ,
            to_name: 'johnwondoh@gmail.com',
            message_html: this.state.message
          };

        emailjs.send('gmail', 'template_T2w1yx1v', templateParams, 'user_NGECXC5mrzzRi4tQAUhzw')
            .then((result) => {
                // console.log(result.text);
                this.setState({
                    success: true
                })
                this.resetForm()
                setTimeout(() => {
                    this.setState({success:false});
               },5000); 
            }, (error) => {
                // console.log(error.text);
                this.setState({
                    error: true
                })
                setTimeout(() => {
                    this.setState({success:false});
               },5000); 
            });
    }

    resetForm = () =>{
        this.setState({
            name: '',
            email: '',
            phoneNumber: '',
            message: ''
        })
    }



    render() {
        const { classes } = this.props
        const successVisibility = {
            visibility: this.state.success ? 'visible' : 'hidden'
        }
        const errorVisibility = {
            visibility: this.state.error ? 'visible' : 'hidden'
        }
        return (
            <section id='contact' className={classes.sectionStyle}>
                <div className={classes.sectionHeader}>
                    <h2>Contact me</h2>
                    <div className='container-fluid'>
                    <Row>
                        <Col md={6}>
                            <h3>Get in touch</h3>
                            <div className={ classes.contactInfo}>
                                <div>
                                    <a href='mailto: john.wondoh@mymail.unisa.edu.au' title='john.wondoh@mymail.unisa.edu.au'>
                                        < MdEmail /> john.wondoh@mymail.unisa.edu.au
                                    </a>
                                </div>
                                <div>
                                    <a href='tel:+61450027156'>
                                        < MdLocalPhone /> +61 45 002 7156
                                    </a>
                                </div>
                            </div>

                            <div className='mb-3'>
                                <div className={classes.connectIcon}>
                                    <a href='https://www.linkedin.com/in/john-wondoh-aaa85337/' target='_blank' rel="noopener noreferrer"><FaLinkedin /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://www.facebook.com/wonzy' target='_blank' rel="noopener noreferrer"><FaFacebookSquare /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://github.com/johnwondoh' target='_blank' rel="noopener noreferrer">< FaGithub /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://stackoverflow.com/users/3559143/john' target='_blank' rel="noopener noreferrer"><FaStackOverflow /></a>
                                </div>
                                <div className={classes.connectIcon}>
                                    <a href='https://www.instagram.com/jaywonzy/' target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                        <div>
                        <h3>Send me a message</h3>
                        <div className={classes.errorMessage} 
                            style={errorVisibility}
                            role="alert">
                            not sent :( use email
                        </div>
                        <div className={classes.successMessage} 
                            style={successVisibility}
                            role="alert">
                            sent :)
                        </div>
                        {/* <div class="alert alert-warning" role="alert">
                            A simple primary alert—check it out!
                        </div> */}
                            <form 
                                onSubmit={this.sendEmail}
                                className={classes.formStyle + "mx-sm-3 mb-3 mt-3"}>
                                
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='name' className="col-sm-4 labelStyle">Name *</label>
                                    <input type='text' id='name' 
                                        name='name'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        required minLength='2' maxLength='20'
                                        className="form-control col-sm-8" 
                                        placeholder='enter your name' />
                                </div>
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='email' className="col-sm-4 labelStyle">Email *</label>
                                    <input type='text' id='email' 
                                        name='email'
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        className="form-control col-sm-8" 
                                        placeholder='enter your email address' />
                                </div>
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='phone' className="col-sm-4 labelStyle">Phone Number </label>
                                    <input type='tel' id='phone' 
                                        name='phoneNumber'
                                        value={this.state.phoneNumber}
                                        onChange={this.handleChange}
                                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        maxLength='15'
                                        minLength='9'
                                        className="form-control col-sm-8" 
                                        placeholder='enter your phone number' />
                                </div>
                                {/* <div className="form-group row mx-sm-3 mb-2">
                                    <label htmlFor='phone' class="col-sm-4 labelStyle">Phone Number </label>
                                    <input type='tel' id='phone' className="form-control col-sm-8" placeholder='enter your phone number' />
                                </div> */}
                                <div className="form-group row mx-3 mb-2">
                                    <label htmlFor='message' className="col-sm-4 labelStyle">Message</label>
                                    <textarea type='textarea' id='message' 
                                        name='message'
                                        value={this.state.message}
                                        onChange={this.handleChange}
                                        className="form-control col-sm-8" 
                                        rows='5'> 
                                    </textarea>
                                    {/* <input type='textarea' id='message' className="form-control col-sm-10" placeholder='write your message here' /> */}
                                </div>
                                <div className="form-group mx-3 mb-2">
                                <input className="btn btn-secondary w-25 mr-3" 
                                    type='reset'
                                    onClick={this.resetForm} 
                                    value='Cancel'/>
                                <input className="btn btn-success w-50" 
                                    type='submit'
                                    // onClick={this.handleSubmit}  
                                    value='Send'/>
                                </div>
                                {/* <button>Cancel</button>
                                <button>Send</button> */}
                            </form>
                        </div>
                        </Col>
                    </Row>
                    </div>
                </div>
            </section>
        );
    }
}

export default withStyles(styles)(Contact);
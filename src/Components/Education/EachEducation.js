import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { withStyles } from '@material-ui/styles'

const patternPath = process.env.PUBLIC_URL + '/images/email-pattern/email-pattern.png'

const styles = {
    main: {
        // margin: 'auto',
        // backgroundColor: '#f2f4f5',
        // height: '18rem',
        '& img' : {
            // width: '8rem',
            margin: 'auto',
            width: '100%',
            height: '8rem',
            objectFit: 'scale-down'
        },
        // border: '2px solid #1f8dc4',
        // borderRadius: '5%',
        // marginBottom: '2rem',
        padding: '0.5rem',
        fontFamily: 'Open Sans',
        // margin: '10px 5px'
        // color: 'white'
        
        // margin: 'auto',
        textAlign: 'center'
    },
    card: {
        // backgroundColor: '#f2f4f5',
        // backgroundColor: '#fcfcfc',
        // background: 'rgb(221,233,249)',
        // background: 'rgba(101, 157, 189, 0.2)',
        
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255,0.6), rgba(255, 255, 255,0.6)), url(${patternPath})`,
        // background: 'linear-gradient(45deg, rgba(221,233,249,0.5) 0%, rgba(249,249,250,1) 42%, rgba(112,183,244,0.1) 50%, rgba(241,248,251,1) 54%, rgba(237,246,251,1) 100%)',
        // border: '1px solid #e7e3d4',
        // border: '5px solid rgb(6, 133, 196)',
        borderRadius: '12px',
        // boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        // boxShadow: '0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 -12px 30px 0px rgba(0,0,0,0.075)',
        fontFamily: 'Open Sans',
        // border: 'none',
        // margin: '0 0.5em',
        paddingTop: '1em',
        paddingBottom: '0.5em',
        marginBottom: '1em',
        // boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        // border: '3px solid #dfe1eb',
        // borderRadius: '5%',
        // backgroundColor: 'transparent'
        '& p': {
            fontSize: '0.9em',
            fontStyle: 'italic',
            lineHeight: '1.5em',
            width: '65%',
            margin: 'auto'
            // paddingTop: '1em',
            // backgroundColor: 'red'

        },
        '& div': {
            paddingBottom: '1em'
        }
        // '& small': {
        //     fontSize: '1em'
        // }
    },
    degree: {
        background: 'rgb(6, 133, 196)',
        paddingTop: '1em',
        marginBottom: '1em',
        color: 'white'
    }
}

class EachEducation extends Component {

    render() {
        const { classes } = this.props
        return (
            <Col md={6} className={classes.main} >
            {/* <div className={classes.main} > */}
                <Card className={classes.card}>
                    <Card.Img variant="left" src={process.env.PUBLIC_URL + this.props.logo}/>
                    <Card.Body className='mx-0 px-0' >
                        <Card.Title className='mx-0 pb-0'>
                            {this.props.institution}
                        </Card.Title>
                        <div className={classes.degree}>
                            <Card.Subtitle className='text-uppercase font-weight-bold text-monospace'>
                                {this.props.award} 
                            </Card.Subtitle>
                            <Card.Subtitle className="font-weight-bold">
                                {this.props.programme} 
                            </Card.Subtitle>
                        </div>
                        <Card.Subtitle className="text-muted">
                            {this.props.startYear} - {this.props.endYear}
                        </Card.Subtitle>
                        <Card.Text>
                            {/* <small className="text-muted">
                                {this.props.startYear} - {this.props.endYear}
                            </small> <br/> */}
                            
                            <span>
                                {this.props.moreInfo}
                            </span>
                                
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            {/* </div> */}
            </Col>
        );
    }
}

export default withStyles(styles)(EachEducation);
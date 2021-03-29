import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import ItemExperience from './ItemExperience'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/styles'

const styles = {
    main: {
        fontFamily: 'Open Sans',
        margin: 'auto',
        marginTop: '0.7em'
    },
    button: {
        outline: 'none',
        border: 'none',
        width: '20em',
        ['@media (max-width:576px)']: {
            width: '90%',
        },
        marginTop: '2em',
        '&:hover': {
            border: '2px solid rgba(255,255,255,1)'
        }
    },
    card: {
        // width: '40%',
        // ['@media (max-width:992px)']: {
        //     // width: '60%',
        //     // margin: '0 30%'
        // },
        // ['@media (max-width:780px)']: {
        //     width: '70%',
        //     // margin: '0 20%'
        // },
        // ['@media (max-width:576px)']: {
        //     width: '95%',
        // },
        margin: 'auto',
        marginBottom: '1em',
        // marginTop: '0'
        paddingTop: '0em',
        paddingBottom: '1.5em',
        fontFamily: 'Open Sans',
        borderRadius: '30px',
        overflow: 'hidden',
        // boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        boxShadow: ' 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 100px rgba(0, 0, 0, 0.06), 0 20px 30px rgba(0, 0, 0, 0.12)',
        border: 'none'
    },
    cardTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        // backgroundColor: 'rgb(30, 61, 82)',
        paddingBottom: '1.5em',
        paddingTop: '1.5em',
        color: 'white',
        // text-center font-weight-bold bg-dark
    },


    title: {
        fontSize: '2em'
    },

    subtitle: {
        marginTop: '1em',
        backgroundColor: 'rgb(22, 80, 105)',
        // backgroundColor: 'rgb(50, 133, 168)',
        paddingBottom: '1em',
        paddingTop: '1em'
    },
    postitionDetails: {
        color: '#cfd2d4',
        fontStyle: 'italic'

    }
}
class EachExperience extends Component {
    constructor(props) {
        super(props);
        this.state = { showRes: false}
        this.showResponsibilities = this.showResponsibilities.bind(this)
    }

    showResponsibilities(){
        let newShow = !this.state.showRes
        this.setState({showRes: newShow})
    }
    
    render() {

        let responsibilityItems =this.state.showRes ? 
                                    this.props.responsibilities.map((item, index) => 
                                    <ItemExperience 
                                    resItem={item} index={index} key={uuidv4()}/>) :
                                    ''
        
        const { classes } = this.props

        const colorArray = ['rgb(30, 61, 82)', 'rgb(6, 133, 196)', 'rgb(39, 8, 117)', 'rgb(3, 40, 107)']
        const experienceIndex = this.props.index
        // console.log(experienceIndex)
        let chosenColor = experienceIndex < colorArray.length ? 
                experienceIndex : Math.floor(Math.random() * colorArray.length)
        const titleColor = {backgroundColor: colorArray[chosenColor]}

        const buttonStyle = {
            border: '0.16em solid rgba(255,255,255,0)',
            backgroundColor: 'rgb(5, 45, 94)',
            borderRadius: '2em',
            boxSizing: 'border-box',
            textShadow: '0 0.04em 0.04em rgba(0,0,0,0.35)',
            transition: 'all 0.2s'
            // backgroundColor
        }
        
        return (
            <Col md={6} className={classes.main}>
                <Card className={classes.card}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    {/* <Card.Body> */}
                        <div className={classes.cardTitle}  style={titleColor} >                    
                            <Card.Title className={classes.title}>
                                {this.props.position}
                            </Card.Title>
                            {this.props.postitionDetails ? 
                            <Card.Subtitle className={classes.postitionDetails}>
                                {this.props.postitionDetails}
                            </Card.Subtitle>
                            :
                            ''}
                        </div>
                        <Card.Subtitle className="mb-3 mt-2 text-center">
                            {this.props.company}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-center">
                            {this.props.subTitle}
                        </Card.Subtitle>
                        <Card.Text className='text-center'>
                            {this.props.town} | {this.props.country}
                        </Card.Text>
                        {/* <ListGroup flush className='text-muted'>   */}
                                {responsibilityItems}
                        {/* </ListGroup> */}
                        {/* <div className="col text-center"> */}
                        <div className="text-center">
                        <Button style={buttonStyle} variant="dark mt-0" 
                            onClick={this.showResponsibilities}
                            className={classes.button}>
                            {this.state.showRes ? 'Hide responsibilities ' : 'Show responsibilities ' }
                            {this.state.showRes ? <AiFillCaretUp /> : <AiFillCaretDown /> }
                        </Button>
                        </div>
                    {/* </Card.Body> */}
                </Card>
            </Col>
        );
    }
}

export default withStyles(styles)(EachExperience);
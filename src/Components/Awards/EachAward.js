import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { withStyles } from '@material-ui/styles'
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";


// const patternPath = process.env.PUBLIC_URL + '/images/email-pattern/email-pattern.png'

const styles = {
    // main: {
    //     fontFamily: 'Open Sans',
    //     width: '70%',
    //     margin: 'auto',
    //     ['@media (max-width:992px)']: {
    //         width:'80%'
    //     },
    //     ['@media (max-width:768px)']: {
    //         width:'95%'
    //     },
    //     marginBottom: '2em'
    // },
    card: {
        // backgroundColor: 'red',
        // border: '3px solid green',
        
        // width: '80%',
        // margin: 'auto',
        fontFamily: 'Open Sans',
        
        // width: '30%',
        // ['@media (max-width:992px)']: {
        //     width: '60%',
        //     // margin: '0 30%'
        // },
        // ['@media (max-width:780px)']: {
        //     width: '70%',
        //     // margin: '0 20%'
        // },
        // ['@media (max-width:576px)']: {
        //     width: '95%',
        // },
        marginBottom: '2em',

        
        // backgroundColor: '#f0f3f5',
        textAlign: 'center',
        // border: '1px solid #e7e3d4',
        // backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255,0.6), rgba(255, 255, 255,0.6)), url(${patternPath})`,
        background: 'rgb(253, 251, 252)',
        borderRadius: '12px',
        boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        padding: '20px',
        paddingTop:'1em',
        paddingBottom: '1em',
        // marginTop: '1em',
        // marginBottom: '1em',
        margin: '0.5em',
        position: 'relative',
        
        // margin: 'auto',
        
        '& button': {
            width: '30%',
            margin: 'auto',
            ['@media (max-width:992px)']: {
                width:'60%'
            },
        }
        
    },
    imgStyle: {
        width: '20rem',
        margin: 'auto',
        marginBottom: '2em'
    }
}

class EachAward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultImage: 'https://mymvta.ca/wp-content/uploads/2018/11/gold-trophy-862x690.jpg',
            showAward: false
        }
        this.showAwardImg = this.showAwardImg.bind(this)
    }

    showAwardImg(){
        let showImg = !this.state.showAward
        console.log(showImg)
        this.setState({showAward: showImg})
    }
    
    render() {
        const imgPath = process.env.PUBLIC_URL + '/images/awards/' + this.props.image
        const { classes } = this.props
        // console.log(this.state.showAward)
        // let awardImg = this.state.showAward ? 
        //         <Card.Img variant="top" className={classes.imgStyle} src={ imgPath } alt='Image'/>
        //         : <span></span>
        // let button = this.props.image ? 
        //         <Button variant="primary" size="sm"
        //             onClick={this.showAwardImg}
        //             className=' text-center'>
        //             {this.state.showAward ? 'Hide image  ' :'Image available  ' }
        //             {this.state.showAward ? <AiFillCaretUp/> :<AiFillCaretDown/> }
        //         </Button>
        //         : <span></span>
        return (
            // < Col lg={6}>
                // <Container className={classes.main}>
                    <Card className={classes.card} >

                        <Card.Body>
                            <Card.Title className='mb-3'>{this.props.award}</Card.Title>
                            <Card.Subtitle className='font-weight-bold mb-2' >
                                {this.props.institute}
                            </Card.Subtitle>
                            <Card.Text className="mb-2 text-muted">
                                {this.props.note} 
                            </Card.Text>
                        </Card.Body>
                        {/* { awardImg }
                        { button } */}
                    </Card>
                // </Container>
            // </Col>
        );
    }
}

export default withStyles(styles)(EachAward);
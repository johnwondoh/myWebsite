import React, { Component } from 'react';
import './EachFramework.css'
import Col from 'react-bootstrap/Col';
import { withStyles} from '@material-ui/styles'

const styles = {
    skill: {
        // backgroundColor: 'red',
        // border: '3px solid green'
        '& img': {
            height: '6rem'
        },
        '& h4': {
            fontSize: '1.2rem',
            paddingTop: '0.7rem',
            fontFamily: 'Open Sans'
        }
    }
}

class EachFramework extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultImage: ''
        }
    }
    
    render() {
        const {classes} = this.props
        const bigLogo = ['NodeJS', 'Scikit-learn', 'MS SQL Server', 'SQLite']
        // console.log(bigLogo.includes(this.props.title))
        let rangeArray = bigLogo.includes(this.props.title) ?
            12 : 6
        const skillType = ['language', 'library', 'database', 'software']
        skillType.forEach(type => {
            // console.log(type)
        })
        return (
            <Col lg={3} md={4} xs={rangeArray} className={classes.skill}>
                <div className='p-2 text-center'>
                    <img src={process.env.PUBLIC_URL + this.props.imageUrl} alt={this.props.title}/>
                    <h4 className='text-center'>{this.props.title}</h4>
                    {/* <p>{this.props.rate}</p> */}
                </div>
            </Col>
        );
    }
}

export default withStyles(styles)(EachFramework);
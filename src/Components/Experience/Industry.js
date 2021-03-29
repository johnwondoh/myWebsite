import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { withStyles} from '@material-ui/styles'


const styles = {
    skill: {
        // backgroundColor: 'red',
        // border: '3px solid green'
        fontFamily: 'Open Sans',
        '& img': {
            height: '7rem'
        },
        '& h4': {
            fontSize: '1rem',
            paddingTop: '0.7rem',
            
        },
        '& h5': {
            fontSize: '1rem',
            fontWeight: 'bold'
        }
    }
}

class Industry extends Component {
    render() {
        const {classes} = this.props
        return (
            <Col lg={4} md={4} sm={6} xs={12} className={classes.skill}>
                <div className='p-2 text-center'>
                    <img src={process.env.PUBLIC_URL + this.props.src} alt={this.props.name}/>
                    <h4 className='text-center'>{this.props.name}</h4>
                    <h5>({this.props.abreviation})</h5>
                    {/* <p>{this.props.rate}</p> */}
                </div>
            </Col>
        );
    }
}

// export default Industry;
export default withStyles(styles)(Industry);
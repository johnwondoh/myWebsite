import React, { Component } from 'react';
// import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import { withStyles } from '@material-ui/styles'

const styles = {
    evenItem: {
        // backgroundColor: 'red',
        margin: '1em',
        paddingLeft: '1em',
        // borderRight: '1px solid black'
        borderLeft: '4mm ridge rgb(11, 46, 69, .6)',
        // boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        border: '0.5px solid rgb(237, 235, 235)'

        // borderRight: '4mm ridge rgb(170, 50, 220, .6)'
    },
    oddItem: {
        // backgroundColor: 'blue'
        margin: '1em',
        paddingRight: '1em',
        // borderRight: '1px solid black'
        borderRight: '4mm ridge rgb(11, 46, 69, .6)',
        // boxShadow: '8px 8px 6px -12px rgba(0, 0, 0, 0.5)'

        // borderRight: '4mm ridge rgb(170, 50, 220, .6)'
        // border: '0.5px solid rgb(237, 235, 235)'

    }
}
class ItemExperience extends Component {

    isOdd(num) { return num % 2;}

    render() {
        console.log('printing responsibility item')
        console.log(this.props.resItem)
        console.log(this.props.index, this.isOdd(this.props.index))
        const { classes } = this.props
        const itemIndex = this.props.index
        const itemClass = itemIndex == 0 || itemIndex % 2 == 0 ? classes.evenItem : classes.oddItem

        return (
            <div className={ itemClass}>
            {/* <div > */}
                {/* <ListGroupItem>{this.props.resItem}</ListGroupItem> */}
                {/* <li>{this.props.resItem}</li> */}
                {this.props.resItem}
            </div>
        );
    }
}

// export default ItemExperience;
export default withStyles(styles)(ItemExperience);
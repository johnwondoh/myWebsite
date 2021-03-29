import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
    pub: {
        margin: 'auto',
        marginTop: '1em',
        // position: 'relative',
        boxShadow: '8px 8px 6px -6px rgba(0, 0, 0, 0.5)',
        border: '0.5px solid #b8bcc2',
        // borderLeft: '5px solid black',
        width: '75%',
        ['@media (max-width:780px)']: {
            width: '90%'
        },
        ['@media (max-width:576px)']: {
            width: '95%',
        },
        '& a': {
            fontSize: '0.9em'
        }
    }
}

class EachPublication extends Component {
    render() {
        const { authors, title, venue, year, doi, paperUrl} = this.props
        let authorList = ''
        for(var i=0; i<authors.length; i++){
            if(i < authors.length - 1){
                authorList = authorList + authors[i].text + ', '
            } else {
                authorList = authorList + authors[i].text
            }
        }

        const  { classes } = this.props
        return (
            // <div className="card" >
            //     <div className="card-body">
            //         <h5 className="card-title">1</h5>
            //         <h6 className="card-subtitle mb-2 text-muted">1</h6>
            //         <h6 className="card-subtitle mb-2 text-muted">1</h6>
            //         <a href="#" className="card-link">1</a>
            //     </div>
            // </div>
            // <div className="card" style="width: 18rem;">
            <div className={classes.pub}>
                {/* <div className='card'> */}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2">{authorList}</h6>
                        <h6 className="card-subtitle mb-2 text-muted">{venue} | {year}</h6>
                        {/* <a href={paperUrl} target='_blank' className="btn btn-outline-success">View paper | Doi: {doi}</a> */}
                        <a href={paperUrl} target='_blank' className="card-link">View paper | Doi: {doi}</a>
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

// export default EachPublication;
export default withStyles(styles)(EachPublication);
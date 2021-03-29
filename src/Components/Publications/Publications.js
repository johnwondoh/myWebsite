import React, { Component } from 'react';
import EachPublication from './EachPublication';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

class Publications extends Component {
    constructor(props) {
        super(props);
        this.state ={isLoaded: false}
        this.getPublications = this.getPublications.bind(this)
    }

    componentDidMount() {
        this.getPublications()
    }

    getPublications(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const dblpurl = "http://dblp.org/search/publ/api?q=wondoh&format=json"
        axios
        // The API we're requesting data from
        .get(proxyurl + dblpurl)
        // Once we get a response, we'll map the API endpoints to our props
        .then(
            response => response.data.result.hits.hit.map(e => ({
                authors: e.info.authors.author,
                title: e.info.title,
                venue: e.info.venue,
                year: e.info.year,
                doi: e.info.doi,
                paperUrl: e.info.ee 
            })
            // response => response.data
            )
        )
        .then(
            // data => console.log(data)
            pubs => {
                this.setState({
                  pubs,
                  isLoaded: true
                })
            })
        .catch(error => console.log(error));
    }


    
    render() {
        // this.state.pubs.map(e => console.log(e))
        // this.state.isLoaded 
        const publications = this.state.isLoaded  
            ? this.state.pubs.map(e => <EachPublication 
                authors = {e.authors}  title = {e.title}
                venue = {e.venue}  year = {e.year}
                doi = {e.doi}  paperUrl = {e.paperUrl} key={uuidv4()} />)
            : '' 
         

        return (
            <div>
                {/* <p>I have some peer reviewed publications</p> */}
                {publications }
            </div>
        );
    }
}

export default Publications;
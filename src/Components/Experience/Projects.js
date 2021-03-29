import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'

class Projects extends Component {
    render() {
        const {title, projectName, owner, subOwner, position, company} = this.props
        const owners = `${owner ? owner : ''} 
            ${subOwner ?  "| " +  subOwner  : ''} 
            ${company ?  "| " +  company  : ''}`
        const projectStream = `${projectName ? 'Project stream: ' + projectName : ''} `
        return (
            // <div>
            //     <h3>{title}</h3>
            //     <h4> Owned by: {owner} </h4>
            //     <h4> Project Stream: {projectName} </h4>
            //     <h4> Project client: {subOwner} </h4>
            //     <h4> My position: {position} </h4>
            //     <h4> Researching institute: {company} </h4>

                
            // </div>

            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{projectStream}</Card.Subtitle>
                    <Card.Subtitle className="mb-2">{owners}</Card.Subtitle>
                    <Card.Text>
                        My role: {position}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Projects;
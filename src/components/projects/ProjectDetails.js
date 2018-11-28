import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { Redirect } from 'react-router-dom';
import moment from 'moment/min/moment-with-locales';

const ProjectDetails = (props) => {
    moment.locale('eng');
    const { project, auth } = props;
    if (!auth.uid) { return <Redirect to='/signin' />}
    console.log(project);
    if(project) {
        return (
        <div className="container section project-details" key={project.id}>
            <div className="card z-depth-0">
                <div className="card-content">
                <div className="row">
                    <div className="col s3">
                    <img className="responsive-img" src={project.img} />
                    </div>
                    <div className="col s7">
                    <span className="card-title">{project.title}</span>
                    <p>{project.content}</p>
                
               
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
        )
    } else {
        return (
            <div className="loader">Loading...</div>
            )
    }
   
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    console.log(project)
    return {
        project: project,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails);

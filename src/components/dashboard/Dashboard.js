import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import JuicesTree from './JuicesTree';

class Dashboard extends Component {

  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) { return <Redirect to='/signin' />}
    if(projects) {
    return (
      <div className="container">
        <div className="row">
        <div className="col s3">
                <h4>User Juices</h4>
                <ProjectList projects={projects}/>
            </div>
        
        <div className="col s4 offset-s1">
         <h4>Best of juices</h4>
         <JuicesTree />
        </div>
        <div className="col s2 offset-s2 hide-on-med-and-down">
        <h4>Notifications</h4>
        <Notifications notifications={notifications}/>
        </div>
        <div className="row">
        <div className="col s4 offset-s4">
        <br />
        <h4>Love fruits? </h4>
        <p className="left-align">It's the perfect time to indulge and make the most of nature's sweet offerings by shaking up spectacular juices at home!</p>
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
}
const mapStateToProps = (state) => {
  console.log(state.project.projects)
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc'] },
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
  ])
  )(Dashboard);
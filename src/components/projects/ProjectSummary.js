import React from 'react';
import moment from 'moment/min/moment-with-locales';

const ProjectSummary = ({project}) => {
  const project_img = project.img ? <img className="activator" src={project.img}/> : <img className="activator" src="https://4.imimg.com/data4/XB/FG/MY-31657999/mix-fruit-juice-500x500.jpg"/>;
  moment.locale('eng');
  return (
    <div className="card lime accent-1 lighten-3 z-depth-2">
        <div className="card-content black-text text-darken-3">
            <span className="card-title ">{project.title}</span>
            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
           
        </div>
        <div className="card-image">
          {project_img}
        </div>
        <div className="card-action">
            <p className="black-text">{moment(project.createdAt.toDate()).calendar()}</p>
        </div>
    </div>
  )
}
export default ProjectSummary;
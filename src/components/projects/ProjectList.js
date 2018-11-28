import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

class ProjectList extends Component {
  state = {
    limit: 5
}
onLoadMore = () => {
    this.setState({
        limit: this.state.limit + 3
    })
}
  
  render() {
    const { projects} = this.props;

  return (
    <div className="project-list section center">
      { projects && projects.slice(0, this.state.limit).map(project => {
        return (
          <Link to={`/project/${project.id}`} key={project.id}>
          <ProjectSummary project={project}/>
          </Link>

          )
      })}  
      {projects && projects.length > this.state.limit ? 
      <a  onClick={this.onLoadMore} className="red darken-4 waves-effect waves-light btn-large"><i className="material-icons right">arrow_downward</i>Load More</a>
        : <a className="red darken-4 waves-effect waves-light btn-large"><i className="material-icons right">sentiment_dissatisfied</i>No More Juices</a>
      } 
    </div>
  )
}
}
export default ProjectList;
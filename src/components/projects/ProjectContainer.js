import React, {PropTypes} from 'react';
import {Link} from 'react-router';


const ProjectContainer = ({project}) => {
  return (
    <figure className="prjImgDiv" >
      <a target="_blank" href={project.url}>
        <img className="prjImg" src={project.image.fields.file.url}/>
      </a>
      <figcaption className="prjTitle">{project.title}</figcaption>
    </figure>
  )
}

ProjectContainer.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectContainer

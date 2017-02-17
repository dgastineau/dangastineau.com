import React, {PropTypes} from 'react';
import ProjectContainer from './ProjectContainer';


const ProjectsSection = ({projects}) => {

  return (
    <div>
      <h1 className="pageTitle" >my projects</h1>
      <div className="prjSection">
        { projects.map(project =>
              <ProjectContainer key={project.fields.slug} project={project.fields}/>
        )}
      </div>
    </div>
  );
};

ProjectsSection.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsSection;


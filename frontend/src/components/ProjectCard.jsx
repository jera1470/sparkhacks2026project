import '../css/ProjectCard.css'
import default2 from '../assets/Default_pfp.jpg'

function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div className="project-card">
      <div className="project-details">
        <img src={default2} className="project-pfp" alt="User Profile"/>
        <div>
          <div className="project-title">
            {project.title}
          </div>
          <div style={{ fontSize: '0.9rem', color: '#ccc' }}>
            {project.username}
          </div>
        </div>
      </div>
      <div className="project-image">
        <img src={project.image_url} alt={project.title}/>
      </div>
    </div>
  )
}

export default ProjectCard;
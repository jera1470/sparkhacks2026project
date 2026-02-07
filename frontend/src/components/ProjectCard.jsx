import '../css/ProjectCard.css'
import nethack from '../assets/nethack.png'
import default2 from '../assets/Default_pfp.jpg'
import {Link} from "react-router"

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-details">
        <img src={default2} className="project-pfp" alt="User Profile"/>
        <div>
          <Link to="/projectpage">Project Title</Link>
        </div>
      </div>
      <div className="project-image">
        <img src={nethack} alt="Project Screenshot"/>
      </div>
    </div>
  )
}

export default ProjectCard;
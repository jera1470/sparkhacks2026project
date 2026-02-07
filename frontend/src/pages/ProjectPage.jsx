import '../css/ProjectPage.css'
import {Link, useLocation} from "react-router"

function ProjectPage() {
  const location = useLocation();
  const project = location.state?.project;

  if (!project) return <div className="projectpage"><div className="content">No project data found.</div></div>;

  return (
    <div className="projectpage">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <span className="project-title-text">
          {project.title}
        </span>
        <Link to="/">
          {project.username}
        </Link>
      </div>
      <div className="content">
        <div className="photo-showcase">
          <img src={project.image_url} alt={project.title} />
        </div>
        <div className="project-description">
          {project.description}
        </div>
        <div className="project-comments">
          <textarea
            placeholder="Write a comment..."
            className="comment-input"
          />
          <button
            type="submit"
            className="comment-submit">
            Submit
          </button>
          <div className="comment-list">
            <div className="comment">
              Comment
            </div>
            <div className="comment">
              Comment
            </div>
            <div className="comment">
              Comment
            </div>
            <div className="comment">
              Comment
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage;
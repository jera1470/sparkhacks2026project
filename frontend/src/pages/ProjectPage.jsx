import '../css/ProjectPage.css'
import {Link} from "react-router"
import nethack from '../assets/nethack.png'

function ProjectPage() {
  return (
    <div className="projectpage">
      <div className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <span className="project-title-text">
          Project Page
        </span>
        <Link to="/">
          Username
        </Link>
      </div>
      <div className="content">
        <div className="photo-showcase">
          <img src={nethack} alt="1"/>
          <img src={nethack} alt="2"/>
          <img src={nethack} alt="3"/>
          <img src={nethack} alt="4"/>
          <img src={nethack} alt="5"/>
          <img src={nethack} alt="6"/>
        </div>
        <div className="project-description">
          Project Description
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
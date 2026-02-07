import NavBar from '../components/NavBar.jsx'
import '../css/Home.css'
import ProjectCard from '../components/ProjectCard.jsx'
import {Link} from 'react-router'
import {useState, useEffect} from 'react'

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.message === "success") {
          setProjects(data.data);
        }
      })
      .catch(err => console.error("Error fetching projects:", err));
  }, []);

  return (
    <div className="home">
      <table
        className="content-columns">
        <tr className="content-columns-header">
          <td>
            <div className="header-text">
              f
            </div>
          </td>
          <td>
            <div className="header-text">
              f
            </div>
          </td>
          <td className="tdlast">
            <div className="header-text">
              f
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="scroll-content">
              {projects.map((project) => (
                <Link to="/projectpage" key={project.id}>
                  <ProjectCard project={project}/>
                </Link>
              ))}
            </div>
          </td>
          <td>
            <div className="scroll-content">

            </div>
          </td>
          <td className="tdlast">
            <div className="scroll-content">

            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Home;
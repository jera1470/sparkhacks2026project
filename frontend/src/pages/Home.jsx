import NavBar from '../components/NavBar.jsx'
import '../css/Home.css'
import ProjectCard from '../components/ProjectCard.jsx'
import {Link} from 'react-router'
import {useState, useEffect} from 'react'

function Home() {
  const [projects, setProjects] = useState([]);
  const [filterIndex1, setFilterIndex1] = useState(0);
  const [filterIndex2, setFilterIndex2] = useState(0);
  const [filterIndex3, setFilterIndex3] = useState(0);

  const categories = ["All", "Computer Science", "Mechanical Engineering", "Electrical Engineering", "Journalism"];

  const handleFilterClick1 = () => setFilterIndex1((prev) => (prev + 1) % categories.length);
  const handleFilterClick2 = () => setFilterIndex2((prev) => (prev + 1) % categories.length);
  const handleFilterClick3 = () => setFilterIndex3((prev) => (prev + 1) % categories.length);

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

  const getFilteredProjects = (index) => {
    if (index === 0) return projects;
    return projects.filter(project => project.category === categories[index]);
  };

  const filteredProjects1 = getFilteredProjects(filterIndex1);
  const filteredProjects2 = getFilteredProjects(filterIndex2);
  const filteredProjects3 = getFilteredProjects(filterIndex3);

  return (
    <div className="home">
      <table
        className="content-columns">
        <tr className="content-columns-header">
          <td>
            <div className="header-text">
              <div className="filter-container">
                <button className="filter-button" onClick={handleFilterClick1}>
                  Filter
                </button>
                <span className="filter-category">{categories[filterIndex1]}</span>
              </div>
            </div>
          </td>
          <td>
            <div className="header-text">
              <div className="filter-container">
                <button className="filter-button" onClick={handleFilterClick2}>
                  Filter
                </button>
                <span className="filter-category">{categories[filterIndex2]}</span>
              </div>
            </div>
          </td>
          <td>
            <div className="header-text">
              <div className="filter-container">
                <button className="filter-button" onClick={handleFilterClick3}>
                  Filter
                </button>
                <span className="filter-category">{categories[filterIndex3]}</span>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className="scroll-content">
              {filteredProjects1.map((project) => (
                <Link to="/projectpage" state={{ project }} key={project.id}>
                  <ProjectCard project={project}/>
                </Link>
              ))}
            </div>
          </td>
          <td>
            <div className="scroll-content">
              {filteredProjects2.map((project) => (
                <Link to="/projectpage" state={{ project }} key={project.id}>
                  <ProjectCard project={project}/>
                </Link>
              ))}
            </div>
          </td>
          <td className="tdlast">
            <div className="scroll-content">
              {filteredProjects3.map((project) => (
                <Link to="/projectpage" state={{ project }} key={project.id}>
                  <ProjectCard project={project}/>
                </Link>
              ))}
            </div>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default Home;
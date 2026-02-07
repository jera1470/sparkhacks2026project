import NavBar from '../components/NavBar.jsx'
import '../css/Home.css'
import ProjectCard from '../components/ProjectCard.jsx'
import {Link} from 'react-router'

function Home() {
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
              <Link to="/projectpage">
                <ProjectCard/>
              </Link>
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
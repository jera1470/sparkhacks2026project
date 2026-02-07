import {Link} from "react-router"
import "../css/NavBar.css"
import {useState, useEffect} from "react"

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleSearch = async (e) => {
    e.preventDefault()
    alert(searchQuery)
  }

  return(
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"> {/* <- do note that / is the root or home page */}
          SparkHacks Web App
        </Link>
      </div>
      <div>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for users, projects, photos..."
            className="search-input"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
      <div className="navbar-items">
        <Link to="/profilepage" className="navbar-items">
          Profile
        </Link>
      </div>
    </nav>
  )
}

export default NavBar;
import { Link } from "react-router";
import "../css/NavBar.css";
import { useState } from "react";

function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">SparkHacks Web App</Link>
      </div>

      {/* MAKE THE FORM DIRECT CHILD OF NAVBAR */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for users, projects, photos..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>

      <div className="navbar-right">
        <Link to="/" className="nav-link">
          Profile (N/A)
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
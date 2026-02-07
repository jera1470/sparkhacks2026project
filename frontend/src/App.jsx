import Home from '../src/pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import ProjectPage from './pages/ProjectPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import {Routes, Route} from 'react-router'
import '../src/css/App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projectpage" element={<ProjectPage/>}/>
          <Route path="/profilepage" element={<ProfilePage/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

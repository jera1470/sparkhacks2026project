import Home from '../src/pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import {Routes, Route} from 'react-router'
import '../src/css/App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App

import Home from '../src/pages/Home.jsx'
import { Routes, Route } from 'react-router'
import '../src/css/App.css'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

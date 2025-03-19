import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.page'
import About from './pages/About.page'
import HomeLayout from './layouts/Home.layout'

function App() {

  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HomeLayout>
  )
}

export default App

import Navbar from './components/layout/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import About from './components/pages/about/About'
import Skills from './components/pages/skills/Skills'
import Project from './components/pages/project/Project'
import Contact from './components/pages/contacts/Contact'
import Futter from './components/layout/futters/futter'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Futter/>
    </div>
  )
}

export default App
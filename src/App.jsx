import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Achievements from './pages/Achievements.jsx'
import Students from './pages/Students.jsx'
import Projects from './pages/Projects.jsx'
import Documents from './pages/Documents.jsx'
import Media from './pages/Media.jsx'
import Publications from './pages/Publications.jsx'
import Reviews from './pages/Reviews.jsx'
import Grants from './pages/Grants.jsx'
import Press from './pages/Press.jsx'
import Contacts from './pages/Contacts.jsx'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar/>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/documents" element={<Documents/>} />
          <Route path="/media" element={<Media/>} />
          <Route path="/publications" element={<Publications/>} />
          <Route path="/reviews" element={<Reviews/>} />
          <Route path="/grants" element={<Grants/>} />
          <Route path="/press" element={<Press/>} />
          <Route path="/contacts" element={<Contacts/>} />
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

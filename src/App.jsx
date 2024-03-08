import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'
import {
 Routes, Route
} from "react-router-dom";

function App() {


  return (
    < >
      <Nav/>
      <Routes>
        <Route path='/' element={< Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<div>Porfolio</div>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='*' element={<div>wrong</div>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

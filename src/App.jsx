import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
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
        <Route path='/resume' element={<div>resume</div>}/>
        <Route path='*' element={<div>wrong</div>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

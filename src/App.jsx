import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {
 Routes, Route
} from "react-router-dom";

function App() {


  return (
    < >
      <Nav/>
      <Routes>
        <Route path='/' element={<div>Hello world!</div>}/>
        <Route path='/contact' element={<div>Contact</div>}/>
        <Route path='/portfolio' element={<div>Porfolio</div>}/>
        <Route path='/resume' element={<div>resume</div>}/>
        <Route path='*' element={<div>wrong</div>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

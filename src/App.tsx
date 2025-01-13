import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import './App.css'
import Home from './Components/Home'
import Template from './Components/Template'
import CreateCv from './Components/CreateCv'
import { useState } from 'react'
function App() {
  const [chosenTemp, setChosenTemp] = useState<React.ReactNode | null>(null);
  return (
    <>
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/templates' element={<Template ChosenTemp={setChosenTemp}/>}/>
        <Route path='/create' element={<CreateCv ChosenTemp={chosenTemp}/>}/>
      </Routes>
   </Router>

    </>
  )
}

export default App

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import './App.css'
import Home from './Components/Home'
import Template from './Components/Template'
import CreateCv from './Components/CreateCv'
import {  useState } from 'react'
import React from 'react'




function App() {
  interface FormData {
    fullName: string;
    address: string;
    phone: string;
    email: string;
    jobTitle: string;
    summary: string;
    workExperience: Array<{
      companyName: string;
      jobTitle: string;
      location: string;
      startDate: string;
      endDate: string;
      isCurrentJob: boolean;
      responsibilities: string;
    }>;
    education: Array<{
      schoolName: string;
      location: string;
      degree: string;
      graduationDate: string;
    }>; 
    skills: string[];
    awards: string[];
    linkedin: string;
  }
  const [chosenTemp, setChosenTemp] = useState<React.FC<{prop: any}> | null>(null)
// const [userInfor , setUserInfor] = useState({})
const [formData, setFormData] = useState<FormData>({  
  fullName: 'Babalo Mzimkhulu',
  address: '49 Mzimkhulu Street, Makhaza, Khayelitsha',
  phone: '081 123 4567',
  email: ' mzimkhulubabalo@gmail',
  jobTitle: ' Software Developer',
  summary: '  I am a software developer with 3 years of experience in the industry. I am proficient in Java, Python, and JavaScript. I have a Bachelor’s degree in Computer Science from the University of Cape Town. I am a hardworking individual who is always looking to learn new things. I am a team player and I am always willing to help my colleagues. I am looking for a challenging role in a company where I can grow and learn new things.',
  workExperience: [ {
    companyName: 'ABC Company',
    jobTitle: 'Software Developer',
    location: 'Cape Town',
    startDate: '2020-01-01',
    endDate: '2022-12-31',
    isCurrentJob: false,
    responsibilities: 'Develop and maintain software applications.',
  }],
  education: [  {
    schoolName: 'University of Cape Town',
    location: 'Cape Town',
    degree: 'Bachelor of Science in Computer Science',
    graduationDate: '2022',
  }],
  skills: [ 'Java', 'Python', 'JavaScript'],
  awards: [ 'Employee of the Month - ABC Company - January 2022'],
  linkedin: ' https://www.linkedin.com/in/babalo-mbulawa-3a49b219b',})
  
  return (
    <>
    <Router>
      <NavBar/>
     
      <Routes>
        
        <Route path='/' element={<Home/>}/>
         <Route path='/templates' element={<Template ChosenTemp={setChosenTemp}/>}/>
        <Route path='/create' element={ <CreateCv ChosenTemp={chosenTemp}  formData={formData} setFormData={setFormData}/>} />
       
      </Routes>
     
   </Router>

    </>
  )
}

export default App

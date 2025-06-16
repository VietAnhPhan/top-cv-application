// import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import EducationalExperience from './components/EducationalExperience'
import PracticalExperience from './components/PracticalExperience'
import FormButton from './components/FormButton'

import './App.css'
import { useState } from 'react'


function App() {
  
  const [clickIndex, setclickIndex] = useState(0);

  const [resume, setResume] = useState({
    name:'',
    email:'',
    phone:'',
    school:'',
    study:'',
    dateStudy:'',
    company:'',
    position:'',
    mainResponsibilities:'',
    dateFrom:'',
    dateUntil:''
  });


  function handleClick(e){
    e.preventDefault();
    
    if(clickIndex===0)
      setclickIndex(1)
    else setclickIndex(0)
  }

  function handleTyping(e){

    if(e.target.id==="your-name")
    setResume({...resume, name: e.target.value});
    if(e.target.id==="your-email")
    setResume({...resume, email: e.target.value});
    if(e.target.id==="phone-number")
    setResume({...resume, phone: e.target.value});

    if(e.target.id==="school-name")
    setResume({...resume, school: e.target.value});
    if(e.target.id==="title-of-study")
    setResume({...resume, study: e.target.value});
    if(e.target.id==="date-of-study")
    setResume({...resume, dateStudy: e.target.value});

    if(e.target.id==="company-name")
    setResume({...resume, company: e.target.value});
    if(e.target.id==="position-title")
    setResume({...resume, position: e.target.value});
    if(e.target.id==="main-responsibilities")
    setResume({...resume, mainResponsibilities: e.target.value});
    if(e.target.id==="date-from")
    setResume({...resume, dateFrom: e.target.value});
    if(e.target.id==="date-until")
    setResume({...resume, dateUntil: e.target.value});
    
  }

  return (
    <div className="main">
      <form>
        <GeneralInformation onType = {handleTyping} generalInfo = {{name:resume.name, email: resume.email, phone:resume.phone}} clickIndex={clickIndex}></GeneralInformation>

        <EducationalExperience onType = {handleTyping} eduExp = {{school:resume.school, study: resume.study, dateStudy:resume.dateStudy}} clickIndex={clickIndex}></EducationalExperience>

        <PracticalExperience onType = {handleTyping} practicalExp = {{company:resume.company, position: resume.position, mainResponsibilities:resume.mainResponsibilities, dateFrom:resume.dateFrom, dateUntil:resume.dateUntil}} clickIndex={clickIndex}></PracticalExperience>

        <div className="form-action">
          <FormButton isClickAble = {clickIndex===1} name="Edit" onAction={handleClick}>Edit</FormButton>
          <FormButton isClickAble = {clickIndex===0} name="Submit" onAction={handleClick}>Submit</FormButton>
        </div>

      </form>

    <div className="cv-information">
      <header>
        <h1>{resume.name==='' && 'Your name'} {clickIndex===1 && resume.name}</h1>
        <p>{resume.email==='' && 'youremail@example.com'} {clickIndex===1 && resume.email}</p>
        <p>{resume.phone==='' && '(+84) 011 088 095'} {clickIndex===1 && resume.phone}</p>
      </header>
      <div className="cv-title-grid">
        <h2>Education</h2>  
        <div className="seperator"><hr /></div>
      </div>

      <div className="cv-content-grid">
        <p className='content-title'>School name: </p> <p className='content-details'>{resume.school==='' && 'University of Science'} {clickIndex===1 && resume.school}</p>
        <p className='content-title'>Title of study: </p> <p className='content-details'>{resume.study==='' && 'Computer Science'} {clickIndex===1 && resume.study}</p>
        <p className='content-title'>Date of study: </p> <p className='content-details'>{resume.dateStudy ==='' && '01/01/1999'} {clickIndex===1 && resume.dateStudy}</p>
      </div> 


        <div className="cv-title-grid">
        <h2>Work Experience</h2>  
        <div className="seperator"><hr /></div>
      </div>

      <div className="cv-content-grid">
        <p className='content-title'>Company name:</p> <p className='content-details'>{resume.company ==='' && 'Microsoft Corporation'} {clickIndex===1 && resume.company}</p>
        <p className='content-title'>Position title: </p> <p className='content-details'>{resume.position ==='' && 'Senior Software Developer'} {clickIndex===1 && resume.position}</p>
        <p className='content-title'>Main responsibilities:</p> <p className='content-details'>{resume.mainResponsibilities ==='' && 'Analyse features, lead a junior memebers, reviewing code, maintain and deploy'} {clickIndex===1 && resume.mainResponsibilities}</p>
        <p className='content-title'>Date from: </p> <p className='content-details'>{ resume.dateFrom==='' && '01/01/2004' } {clickIndex===1 && resume.dateFrom}</p>
        <p className='content-title'>Date until: </p> <p className='content-details'>
          {resume.dateUntil ==='' && '01/01/2014'}
          {clickIndex===1 && resume.dateUntil}
        
        </p>
      </div>

    </div>

    </div>
  )
}

export default App

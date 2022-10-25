import React  from 'react';
import './App.css';
import Student from "./Student";
import { useState,useEffect } from 'react';


function App() {


  const initStudents =localStorage.getItem("students") ? JSON.parse(localStorage.getItem("students")):[];
  const [students,setStudent] = useState(initStudents);

  const addStudent = (student)=>{
  const newStudnet = [...students,student]
    setStudent(newStudnet);
  

  }
  useEffect(()=>{
    localStorage.setItem("students",JSON.stringify(students));
    return()=>{
      console.log('component will unmout');
    }
  },[students])
  return (
    <div className="App">

      <Student addStudent={addStudent}/>
        {
          students.length>0 && students.map((stud,index)=><h1 key={index} className='studentName'>
                  <span>Je suis</span>  {stud.name} <span>né le</span>  {stud.date} <span>à</span> {stud.ville} <span>et mes loisirs sont : </span>
                    {stud.loisirs}
          </h1>)
        }
    </div>
  );
}

export default App;

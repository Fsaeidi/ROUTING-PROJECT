import React from 'react'
import coursesData from '../../CardDatas'
import { useState } from 'react'
import EveryCourse from './EveryCourse'


export default function Courses() {

 const[courses,setCourse]=useState(coursesData)

  return (
    <div style={{display:"flex",marginTop:"20px",justifyContent:"space-between",marginLeft:"10px"}}>
      {courses.map(course =>(
           <EveryCourse  {...course} key={course.id}/>
      )
       
        )}
    </div>
  )
}

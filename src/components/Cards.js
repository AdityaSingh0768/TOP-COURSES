import React, { useEffect, useState } from 'react'
import {Card} from './Card';
import { use } from 'react';
 const Cards = (props) => {
     let courses=props.courses
     let category=props.category
     const [likedcourses ,setlikedcourses]=useState([]) 
     const[likedcoursesdata,setlikedcorsesdata]=useState([])

      function getCourses(courses){
          if(category==='All'){
             let allcourses=[];
             Object.values(courses).forEach(array=>{
                array.forEach( (coursedata)=>{
                 allcourses.push(coursedata);
                })
             })
             return allcourses
            }
            if(category==='Liked'){
              return likedcoursesdata
            }
            else {
                // sirf specific category ka data (array)pass krna h 
                return courses[category];
            }
      }

      
  return (
    <div  className=' flex flex-wrap justify-center gap-4 mb-4' >
               {getCourses(courses).map((course)=>{
                return(                      // return is not mandatory 
                     <Card key={course.id} 
                      course={course}
                       likedcourses={likedcourses}
                        setlikedcourses={setlikedcourses}
                        likedcoursesdata={likedcoursesdata}
                        setlikedcorsesdata={setlikedcorsesdata}>                 
                        </Card>
                )
               })  } 
    </div>
  )
}
 export default Cards

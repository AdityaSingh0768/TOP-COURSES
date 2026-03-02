import React, { useEffect, useState } from 'react'
import {Card} from './Card';
import { use } from 'react';
 const Cards = (props) => {
     let courses=props.courses
     let category=props.category
     const [likedcourses ,setlikedcourses]=useState([]);
     const[likedcoursesdata,setlikedcorsesdata]=useState([]);

      function getCourses(courses){
          if(category==='All'){
             let allcourses=[];
             Object.values(courses)//This converts object → array of arrays.
             .forEach(array=>{
                array.forEach( (coursedata)=>{
                 allcourses.push(coursedata); // we going on each array and each course is getting into allcourses
                })
             })
             return allcourses
            }
            if(category==='Liked'){
              return likedcoursesdata// kewal liked courses ayenge isme 
            }
            else {
                // sirf specific category ka data (array)pass krna h 
                
                return courses[category];// array hi return hogs 
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

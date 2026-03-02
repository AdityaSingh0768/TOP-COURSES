import React, { useEffect, useState } from "react";
// import { filterData,apiUrl } from "./data";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import Cards from "./components/Cards";
import { Card } from "./components/Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { filterData } from "./data.js"; // named import ko brakcet mein import krte h
import { apiUrl } from "./data.js";
import { Spinner } from "./components/Spinner.js";

const App = () => {
  const [courses, setCourses] = useState([]);// null will give error
  const[loading,setloading]=useState(true);
  const[category,setcategory]=useState(filterData[0].title)//. initial me all cateogry h 

  async function fetchdata() {
    setloading(true);
    try {
      let response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);

      // save data into variable
      //  console.log(data);
    } catch (error) {
      toast.error("something went wrong ");
    }
    setloading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);
    // fetchdata(); it will cause to mny re renders 


  return (
    <div  className="min-h-screen flex flex-col bg-bgDark2">
     
      <div className="bg-bgDark2 ">
       <div >
        <Navbar></Navbar>
      </div>
 <div>
        <Filter filterData={filterData}
        category={category}
        setcategory={setcategory}></Filter>
      </div>
      <div className="w-11/12 max-w-[1200px] flex-wrap mx-auto flex justify-center items-center  min-h-[50vh]">
      {
        loading ?(<Spinner></Spinner>):(<Cards courses={courses} category={category}></Cards>)
      }
      </div>
      </div>
     
    </div>
  );
};

export default App;

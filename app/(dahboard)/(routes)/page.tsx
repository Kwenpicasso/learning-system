'use client'
import AllCourses from "@/app/_component/AllCourses";
import FilterCat from "@/app/_component/FilterCat";
import  { getAllCourses } from "@/app/hygraphapi/Globalapi";
import { useEffect, useState } from "react";



export default function Home() {
  const [courselists, setCourselists] = useState<AllCourseProp[]>();

  // the data runs ones here
  useEffect(() =>{
   getCourses();
  },[]);

  // to fetch all courses from the hygraphapi 
  const getCourses = () => {
    // getallcourses is imported from the globalapi
   getAllCourses().then(resp=>{
    const data:any = resp;
    const data1:AllCourseProp[]= data?.course
    setCourselists(data1)
   })
  }
  return (
<div className="  w-full h-full pt-3  lg:px-4">
  {/*this is the component to filter the courses */}
<FilterCat/>
{/*this is the component for all courses */}
{courselists && <AllCourses courselists={courselists}/>}

</div>
  );
}

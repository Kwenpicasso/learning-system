import AllCourses from "@/app/_component/AllCourses";
import FilterCat from "@/app/_component/FilterCat";



export default function Home() {
  return (
<div className="  w-full h-screen pt-3 lg:px-4">
  {/*this is the component to filter the courses */}
<FilterCat/>
{/*this is the component for all courses */}
<AllCourses/>
</div>
  );
}

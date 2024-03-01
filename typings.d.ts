interface MenuProps {
    name: string;
    icon: string;
    link: string;
}
// interface for all courses
interface AllCourseProp{
    id: string;
    name: string;
    author: string;
    free: boolean;
    banner: {
     url: string;
    };
    authorimage: {
        url: string;
    }
    totalChapters: number;

}
// interface for a sinlge course
interface SingleCourseProp {
    author:string;
    free:boolean;
    id:number;
    authorimage: {
        url: string;
    }
  
    chapters: [
       {
         video:{
            url: string;
        }
       },
       {
         video:{
            url: string;
        }
       },
       {
         video:{
            url: string;
        }
       }
    ];
    description:string;
    name:string;
    totalChapters: number;
}
interface enrollUserId {
    courseId:string;
    userEmail:string;
    completeChapter:string;
}

interface YourResponseType {
    createUserEnrollCourse?: {
      id: string;
      // other properties if any
    };
    // other properties if any
  }
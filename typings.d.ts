interface MenuProps {
    name: string;
    icon: string;
    link: string;
}

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

interface SingleCourseProp {
    author:string;
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
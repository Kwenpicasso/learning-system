interface MenuProps {
    name: string;
    icon: string;
    link: string;
}

interface AllCourseProp{
    id: string;
    name: string;
    author: string;
    banner: {
     url: string;
    };
    authorimage: {
        url: string;
    }
    totalChapters: number;

}
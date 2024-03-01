import { request, gql } from 'graphql-request'
// hygraph master url
const MASTER_URL = `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`

// hygraph api for all courses
export const getAllCourses = async () => {
    const query = gql`
    query MyQuery {
        course {
          id
          name
          author
          free
          banner {
            url
          }
          authorimage {
            url
          }
          totalChapters
        }
      }
      
`
const result = await request(MASTER_URL, query);
return result;
}



// hygraph api for a single course with it ID
 export const getSingleCourse = async (id:any,userEmail:any) => {
    const query = gql`
    query MyQuery {
      courses(where: {id: "${id}"}) {
        author
        free
        id
        name
        chapters {
          ... on Chapter {
            video {
              url
            }
          }
        }
        description
        totalChapters
        authorimage {
          url
        }
      }
      userEnrollCourses(where: {courseId: "${id}", userEmail: "${userEmail}"}) {
        courseId
        userEmail
        completeChapter
        
      }
    }
    
      
`
const result = await request(MASTER_URL, query);
return result;
}


// hygraph api for mutation to add enrolled users with it ID and email address
export const EnrollUser = async (id:any,userEmail:any) => {
  const mutationQuery = gql`
  mutation MyMutation {
    createUserEnrollCourse(data: {courseId: "${id}", userEmail: "${userEmail}"}) {
    
      id
    }
  }
  
    
`
const result = await request(MASTER_URL, mutationQuery);
return result;
}

// hygraph api for mutation to add enrolled users with it ID and email address
export const PubishEnrollUser = async (id:any) => {
  const mutationQuery = gql`
  mutation MyMutation {
    publishUserEnrollCourse(where: {id: "${id}"}) {
      id
    }
  }
  
    
`
const result = await request(MASTER_URL, mutationQuery);
return result;
}
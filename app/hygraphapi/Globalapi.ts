import { request, gql } from 'graphql-request'
const MASTER_URL = `https://api-us-east-1-shared-usea1-02.hygraph.com/v2/${process.env.NEXT_PUBLIC_HYGRAPH_API_KEY}/master`


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

 export const getSingleCourse = async (id:any) => {
    const query = gql`
    query MyQuery {
      courses(where: {id: "${id}"}) {
        author
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
    }
    
      
`
const result = await request(MASTER_URL, query);
return result;
}

// export default {
//     getAllCourses,
//     getSingleCourse
// }
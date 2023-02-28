import { request, gql } from 'graphql-request'


let tempMailObject = {};
const token = localStorage.getItem('web-test-20230228rbwNf')
const endpoint = 'https://dropmail.me/api/graphql/' + token

export async function checkEmails () {
  
        const consultMailQuery = gql`
        query {
            session(id: "${tempMailObject.id}") {
                mails{
                    rawSize,
                    fromAddr,
                    toAddr,
                    downloadUrl,
                    text,
                    headerSubject
                }
            }
        }`
        const data = await request(endpoint, consultMailQuery);
        return data
    //     if (tempMailObject.id) {
    // } else {
    //     return
    // }
}

 export async function main() {
  const createSessionMutation = gql`
  mutation {
    introduceSession {
        id,
        addresses {
          address
        }
        }
    }
  `

   const data = await request(endpoint, createSessionMutation)

   return {
    props:{data}
}

//   console.log("Email temporario criado!!!", data.introduceSession.addresses[0].address);
//   tempMailObject = data.introduceSession;

//   setInterval(async () => {
//     await checkEmails();
//   }, 10000)
}


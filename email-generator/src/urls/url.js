import { request, gql } from 'graphql-request'


let tempMailObject = {};
const token = 'brunagolinelli'
const endpoint = 'https://dropmail.me/api/graphql/' + token

async function checkEmails () {
    if (tempMailObject.id) {
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
        try {
        const data = await request(endpoint, consultMailQuery);
        if (data.session.mails.length < 1) {
            console.log("Nenhum email ate o momento 😢")
        } else {
            console.log("Chegou email", JSON.stringify(data.session.mails))
        }
        } catch (error) {
            console.log("error", error)
        }
    } else {
        return;
    }
}

async function main() {
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

  console.log(data);

  console.log("Email temporario criado!!!", data.introduceSession.addresses[0].address);
  tempMailObject = data.introduceSession;

  setInterval(async () => {
    await checkEmails();
  }, 10000)
}


main().catch((error) => console.error(error))
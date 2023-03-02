import { gql, GraphQLClient } from "graphql-request";

const token = "web-test-20230301NjCxU";
const proxy = "https://proxy.cors.sh/";
const endpoint = proxy + "https://dropmail.me/api/graphql/" + token;

const client = new GraphQLClient(endpoint);
client.setHeader("x-cors-api-key", "temp_5c42e9389d62c226ce7126926a5321d8");

export async function checkEmails(sessionId) {
  const consultMailQuery = gql`
        query {
            session(id: "${sessionId}") {
                mails{
                    rawSize,
                    fromAddr,
                    toAddr,
                    downloadUrl,
                    text,
                    headerSubject
                }
            }
        }`;
  const data = await client.request(consultMailQuery);
  return data;
}

export async function createEmailSession() {
  const createSessionMutation = gql`
    mutation {
      introduceSession {
        id
        addresses {
          address
        }
        expiresAt
      }
    }
  `;

  const data = await client.request(createSessionMutation);
  return data;
}

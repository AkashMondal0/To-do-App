import { gql } from '@apollo/client';

export const gqlLogin = gql`
query login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
`
export const gqlRegister = gql`
mutation usersRegister($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password)
}
`
export const gqlGetUserData = gql`
query getUserDetails($token: String!) {
  getUserDetails(token: $token) {
    username
    email
    id
    todos {
      title
      id
      message
      status
      updatedAt
      createdAt
    }
  }
}

`
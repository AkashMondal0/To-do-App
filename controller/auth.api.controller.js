import { gql } from '@apollo/client';
export const LOGIN_USER = async (data) => { }
export const REGISTER_USER = async (data) => { }
export const LOGOUT_USER = async (data) => { }
export const GET_USER = async (data) => { }

export const getUsers = gql`
query u {
 getUsers {
   email
 }
}
`
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
query get($token: String!) {
  getUserDetails(token: $token) {
    username
    email
    id
  }
}

`
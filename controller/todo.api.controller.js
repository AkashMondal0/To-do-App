import { gql } from "apollo-server-core"

export const CREATE_TODO_GQL = gql`
mutation todoCreate($input: CreateTodoInput!) {
  createTodo(input: $input)
}
`;

export const DELETE_TODO_GQL = gql`
mutation deleteTodo($todoId: ID!) {
  deleteTodo(todoId: $todoId)
}`;

export const UPDATE_TODO_GQL = gql`
mutation up($todoId: ID!, $title: String!, $message: String!, $imageUrl: String!, $status: Int!) {
  updateTodo(todoId: $todoId, title: $title, message: $message, imageUrl: $imageUrl, status: $status)
}`;

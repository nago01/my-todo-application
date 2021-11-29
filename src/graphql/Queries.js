import {gql} from "@apollo/client";

export const BACKEND_QUERY = gql `
query  getTodos{
  users {
    name
    id
    email
    age
  }
  }
`;
import { gql } from '@apollo/client'

const DELETE_ITEM = gql`
mutation deleteUser($id : ID!) {
    deleteUser(id : $id) {
        id
    }
}
`
const ADD_ITEM = gql`
mutation {
    createUser (data: {
      name: $name,
      email: $email
    }){
      name
    }
  }
`
export {DELETE_ITEM , ADD_ITEM}
import { gql } from '@apollo/client'

const DELETE_ITEM = gql`
mutation deleteUser($id : ID!) {
    deleteUser(id : $id) {
        id
    }
}
`
export {DELETE_ITEM}
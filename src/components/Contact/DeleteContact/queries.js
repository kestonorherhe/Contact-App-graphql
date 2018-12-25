import gql from 'graphql-tag'

export const DELETE_CONTACT = gql`
mutation DELETE_CONTACT($id: ID!) {
    deleteContact(id: $id)
}
`
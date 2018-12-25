import gql from 'graphql-tag'

export const EDIT_CONTACT = gql`
mutation EDIT_CONTACT($id: ID!, $input: ContactInput!) {
    editContact(id: $id, input: $input) {
        name
        email
        phone
    }
}
`
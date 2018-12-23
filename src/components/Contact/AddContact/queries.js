import gql from 'graphql-tag'

export const ADD_CONTACT = gql`
mutation ADD_CONTACT($input: ContactInput!) {
    addContact(input: $input) {
        name
        email
        phone
    }
}
`
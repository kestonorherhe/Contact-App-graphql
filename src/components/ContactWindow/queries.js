import gql from 'graphql-tag' 

export const CONTACTS = gql`
query CONTACTS($query: Pagination!) {
    contacts(query: $query) {
        name
        email
        phone
    }
}
`
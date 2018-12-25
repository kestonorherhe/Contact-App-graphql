import gql from 'graphql-tag' 

export const CONTACTS = gql`
query CONTACTS($query: Pagination!) {
    contacts(query: $query) {
        id
        name
        email
        phone
        isFavorite
    }
}
`
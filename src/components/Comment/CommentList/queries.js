import gql from 'graphql-tag'

export const REPLY_COMMENT = gql`
    mutation REPLY_COMMENT($id: ID!, $input: ReplyInput!) {
        replyComment(id: $id, input: $input) {
        id
        reply
        }
    }
`;
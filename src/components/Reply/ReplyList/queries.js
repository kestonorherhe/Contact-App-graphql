import gql from 'graphql-tag'

export const REPLY_REPLY = gql`
    mutation REPLY_REPLY($id: ID!, $input: ReplyReply!) {
        replyReply(id: $id, input: $input) {
        id
        reply
        }
    }
`;
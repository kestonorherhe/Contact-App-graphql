import gql from 'graphql-tag'

export const GET_POSTS = gql`
query Posts($query: Pagination!) {
posts(query: $query) {
    author {
    id
    username
    }
    id
    content
    comments(query: $query) {
        id
        author {
            id
            username
        }
        post {
            id
        }
        comment
        isReply
        replys {
            id
            author {
                username
            }
            post {
                id
            }
            comment {
                id
            }
            isParentOf {
                id
            }
            reply
            isReply
            replies {
                id
                author {
                    username
                }
                post {
                    id
                }
                comment {
                    id
                }
                isParentOf {
                    id
                }
                reply
                isReply
                replies {
                    id
                    author {
                        username
                    }
                    post {
                        id
                    }
                    comment {
                        id
                    }
                    isParentOf {
                        id
                    }
                    reply
                    isReply
                    replies {
                        id
                        author {
                            username
                        }
                        post {
                            id
                        }
                        comment {
                            id
                        }
                        isParentOf {
                            id
                        }
                        reply
                        isReply
                        #continue to add more
                    }
                }
            }
        }
    }
    isComment
    commentCount
    likeCount
}
}
`;
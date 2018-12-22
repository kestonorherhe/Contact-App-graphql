import React, { Component, Fragment } from 'react' 
import gql from 'graphql-tag' 
import { Query, Mutation } from 'react-apollo'
import PostList from './PostList';

const GET_POSTS = gql`
query Get_Posts($id: ID!, $query: Pagination!) {
postsById(id: $id, query: $query) {
    author {
        username
    }
    id
    imageUrl
    content
    comments(query: $query) {
        id
        author {
            username
        }
        post {
            id
        }
        comment
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
                    }
                }
            }
        }
    }
}
}
`;

export default class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            showCommentBox : false,
            showReplyBox: false
        }
        this.toggleShowCommentBox = this.toggleShowCommentBox.bind(this)
        this.toggleReply = this.toggleReply.bind(this)
        
    }

    // toggle show comment box
    toggleShowCommentBox() {
        this.setState({ showCommentBox: !this.state.showCommentBox })
    }

    // toggle show reply comment box
    toggleReply() {
        this.setState({ showReplyBox: !this.state.showReplyBox })
        console.log(this.state.showReplyBox)
    }
    render() {
        console.log(this.state.comment);
        const  userId = JSON.parse(localStorage.getItem('userId')) 
        return <Query
        query={ GET_POSTS }
        variables={ { id: "5c0e8f0cd35e75208024a565", query: { offset: 0, limit: 20 } } }
        >
            { ({ data, loading, error, refetch } ) => {
                if (loading) {
                    return (
                        <div>Loading...</div>
                    )
                }

                if (error) {
                    return (
                        <div>An Unexpected Error Occurred...</div>
                    )
                }

                console.log(data);

                return <Fragment>
                    <PostList posts={ data.postsById } />
                </Fragment>
            }}
        </Query>
    }
}
import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const POST_COMMENT = gql`
  mutation Comment($input: CommentInput!) {
    postComment(input: $input) {
      id
      comment
    }
  }
`;

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: this.props.post,
            comment: ''
        }
        this.onEnterKey = this.onEnterKey.bind(this)
    }

    onEnterKey(e, postComment) {
        if (e.key === 'Enter') {
            postComment().then(() => this.setState({ comment: '', showCommentBox: !this.state.showCommentBox })).then(() => window.location.reload())
        }
    }
    render() {
        const { post } = this.state
        return <Fragment>
            {post.isComment ? '' : <Mutation mutation={ POST_COMMENT } variables={ { input: { postId: post.id, authorId: JSON.parse(localStorage.getItem('userId')), comment: this.state.comment } } }>
                {(postComment, { loading, error }) => {
                  return <Fragment>
                      <div class="card-body">
                          <fieldset class="form-group position-relative has-icon-left mb-0">
                              <input type="text" class="form-control" onChange={ e => this.setState(
                                { comment: e.target.value }
                              ) } onKeyPress={ e => this.onEnterKey(e, postComment) } placeholder="Write comments..." />
                              <div class="form-control-position">
                                  <i class="ft-message-square" />
                              </div>
                          </fieldset>
                      </div>
                  </Fragment>;
                }}
            </Mutation>}
        </Fragment>;
        
    }
}

export default CommentBox
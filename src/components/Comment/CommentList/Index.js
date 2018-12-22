import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import ReplyList from '../../Reply/ReplyList/Index';
import { REPLY_COMMENT } from './queries'

class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments
        }
        this.toggleReply = this.toggleReply.bind(this);
        this.replyFormChange = this.replyFormChange.bind(this)
        this.onReply = this.onReply.bind(this)
    }

    // toggle show reply box
    toggleReply(e) {
        const filter = _.find(this.state.comments, { 'id': e.id })
        const newCommentList = this.state.comments.map(c => {
            if (c.id === e.id) {
                return Object.assign({}, c, {
                    isReply: !filter.isReply
                })
            } else {
                return c
            }
        })
        this.setState({ comments: newCommentList })
    }

    // handle reply form input
    replyFormChange(e) {
        this.setState({ reply: e.target.value })
    }

    // handle reply box submit
    onReply(e, replyComment) {
        if (e.key === 'Enter') {
            replyComment().then(() => window.location.reload())
        }
    }

    render() {
        const { comments } = this.state
        return <Fragment>
            {(comments || []).map(comment => (
                <div key={ comment.id } style={ { paddingLeft: 25 + 'px', paddingTop: 15 + 'px' } } class=" media">
                    <div class="media-left pr-1">
                        <a href="#">
                            <span class="avatar avatar-online"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png" alt="avatar" /></span>
                        </a>
                    </div>
                    <div class="media-body">
                        <p class="text-bold-600 mb-0"><a href="#">{comment.author.username}</a></p>
                        <p class="m-0">{comment.comment}</p>
                        <ul class="list-inline mb-1">
                            <li class="pr-1"><a class="text-muted"><span class="la la-heart-o"></span> Like</a></li>
                            <li class="pr-1"><a
                                class="text-muted" onClick={ (e) => this.toggleReply(comment) }><span class="la la-comments-o" ></span> Reply</a></li>
                            {!comment.isReply ? '' : <Mutation
                                mutation={ REPLY_COMMENT }
                                variables={ {
                                    id: comment.id,
                                    input: {
                                        authorId: JSON.parse(localStorage.getItem('userId')),
                                        postId: comment.post.id,
                                        commentId: comment.id,
                                        reply: this.state.reply
                                    }
                                } }
                            >
                                {(replyComment) => {
                                    return <Fragment>
                                        <div class="card-body">
                                            <fieldset class="form-group position-relative has-icon-left mb-0">
                                                <input type="text" class="form-control"
                                                    onChange={ this.replyFormChange }
                                                    onKeyPress={ e => this.onReply(e, replyComment) }
                                                    placeholder="Write comments..." />
                                                <div class="form-control-position">
                                                    <i class="ft-message-square"></i>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </Fragment>
                                }}
                            </Mutation>}
                        </ul>
                        <ReplyList 
                            comment={ comment } 
                        />
                    </div>
                </div>
            ))}
        </Fragment>
    }
}

export default CommentList
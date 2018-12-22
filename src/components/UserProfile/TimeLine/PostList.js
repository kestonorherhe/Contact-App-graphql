import React, { Component, Fragment } from 'react'
import _ from 'lodash'
import update from 'react-addons-update'
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

const REPLY_COMMENT = gql`
  mutation REPLY_COMMENT($id: ID!, $input: ReplyInput!) {
    replyComment(id: $id, input: $input) {
      id
      reply
    }
  }
`;

const REPLY_REPLY = gql`
mutation REPLY_REPLY($id: ID!, $input: ReplyReply!) {
replyReply(id: $id, input: $input) {
    id
    reply
}
}
`;

export default class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: this.props.posts,
            reply: ''
        }
        this.showCommentBox = this.showCommentBox.bind(this)
        this.toggleReply = this.toggleReply.bind(this)
        this.toggleReplyReply = this.toggleReplyReply.bind(this)
        this.toggleReplyLv2 = this.toggleReplyLv2.bind(this)
        this.toggleReplyLv3 = this.toggleReplyLv3.bind(this)
        this.onEnterKey = this.onEnterKey.bind(this);
        this.replyFormChange = this.replyFormChange.bind(this)
        this.onReply = this.onReply.bind(this)
    }

    showCommentBox(e) {
        const filter = _.find(this.state.posts, { 'id': e });
        const newPostList = this.state.posts.map(p => {
            if (p.id === e) {
                return Object.assign({}, p, {
                    isComment: !filter.isComment
                });

            } else {
                return p;
            }
        })
        this.setState({ posts: newPostList })
    }

    // toggle show reply box
    toggleReply(e) {
        const post = _.find(this.state.posts, { 'id': e.post.id });
        const filter = _.find(post.comments, { 'id': e.id })
        const newCommentList = post.comments.map(c => {
            if (c.id === e.id) {
                return Object.assign({}, c, {
                    isReply: !filter.isReply
                })
            } else {
                return c
            }
        })
        const newState = this.state.posts.map(p => {
            if (p.id === e.post.id) {
                return Object.assign({}, p, {
                    comments: newCommentList
                })
            } else {
                return p
            }
        })
        this.setState({ posts: newState })
    }

    toggleReplyReply(e) {
        console.log(e)
        const posts = _.find(this.state.posts, { 'id': e.post.id })
        const comments = _.find(posts.comments, { id: e.comment.id })
        const filter = _.find(comments.replys, { 'id': e.id })

        const newReplyList = comments.replys.map(r => {
            if (r.id === e.id) {
                return Object.assign({}, r, {
                    isReply: !filter.isReply
                })
            } else {
                return r
            }
        })

        const newCommentList = posts.comments.map(c => {
            if (c.id === e.comment.id) {
                return Object.assign({}, c, {
                    replys: newReplyList
                })
            } else {
                return c
            }
        })
        // update state
        const newPostsState = this.state.posts.map(p => {
            if (p.id === e.post.id) {
                return Object.assign({}, p, {
                    comments: newCommentList
                })
            } else {
                return p
            }
        })
        // console.log(newPostsState)
        this.setState({ posts: newPostsState })
    }

    toggleReplyLv2(e) {
        const isParentOf = e.isParentOf[ 0 ].id
        const posts = _.find(this.state.posts, { id: e.post.id });
        const comments = _.find(posts.comments, { id: e.comment.id });
        const replys = _.find(comments.replys, { 'id': isParentOf })
        const filter = _.find(replys.replies, { 'id': e.id })

        // new reply state
        const newRepliesState = replys.replies.map(r2 => {
            if (r2.id === e.id) {
                return Object.assign({}, r2, {
                    isReply: !filter.isReply
                })
            } else {
                return r2
            }
        })

        // new replys state
        const newReplysState = comments.replys.map(r => {
            if (r.id === isParentOf) {
                return Object.assign({}, r, {
                    replies: newRepliesState
                })
            } else {
                return r
            }
        })

        const newCommentsState = posts.comments.map(c => {
            if (c.id === e.comment.id) {
                return Object.assign({}, c, {
                    replys: newReplysState
                })
            } else {
                return c
            }
        }) 

        const newPostsState = this.state.posts.map(p => {
            if (p.id === e.post.id) {
                return Object.assign({}, p, {
                    comments: newCommentsState
                })
            } else {
                return p
            }
        })
        this.setState({ posts: newPostsState })
    }

    toggleReplyLv3(e) {
        console.log(e)
        // alert('This is how far for now. Thank you')
        const isParentOf = e.isParentOf[ 0 ].id
        const posts = _.find(this.state.posts, { 'id': e.post.id });
        const comments = _.find(posts.comments, { 'id': e.comment.id });
        // console.log(comments.replys)
        const replys = _.find(comments.replys, { post: { 'id': e.post.id } })
        console.log(replys.replies)
        // console.log(_.find(replys.replies, { comment: { 'id': e.comment.id } }));
        const replies = _.find(replys.replies, { comment: { 'id': e.comment.id } })
        const filter = _.find(replies.replies, { 'id': e.id })
        // console.log(_.find(comments.replies.replies, [ 'id', e.id ]));
        console.log(filter)
    }
    // handle reply form input
    replyFormChange(e) {
        this.setState({ reply: e.target.value })
        console.log(this.state.reply);
    }

    // handle reply box submit
    onReply(e, replyComment) {
        if (e.key === 'Enter') {
            replyComment().then(() => window.location.reload())
        }
    }
    // on enter key press
    onEnterKey(e, postComment) {
        if (e.key === 'Enter') {
            postComment().then(() => this.setState({ comment: '', showCommentBox: !this.state.showCommentBox })).then(() => window.location.reload())
        }
    }
    render() {
        console.log(this.props)
        const { posts } = this.state
        return <Fragment>
            {posts.map(post => (
                <div key={ post.id }>
                    {/* <ul class="timeline">
                                <li class="timeline-line"></li>
                                <li class="timeline-group">
                                    <a href="#" class="btn btn-primary"><i class="ft-calendar"></i> Today</a>
                                </li>
                            </ul> */}
                    <ul class="timeline">
                        <li class="timeline-line"></li>
                        <li class="timeline-item">
                            <div class="timeline-badge">
                                <span class="bg-red bg-lighten-1" data-toggle="tooltip" data-placement="right" title="Portfolio project work"><i class="la la-plane"></i></span>
                            </div>
                            <div class="timeline-card card border-grey border-lighten-2">
                                <div class="card-header">
                                    <h4 class="card-title"><a href="#">{post.author.username}</a></h4>
                                    <p class="card-subtitle text-muted pt-1">
                                        <span class="font-small-3">5 hours ago</span>
                                    </p>
                                    <a class="heading-elements-toggle"><i class="la la-ellipsis-h font-medium-3"></i></a>
                                    <div class="heading-elements">
                                        <ul class="list-inline pt-1">
                                            <li><a data-action="reload"><i class="ft-repeat"></i></a></li>
                                            <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row">

                                            <div class="col-lg-12 col-12">
                                                {post.imageUrl ? <img class="img-fluid" src={ `${ post.imageUrl }` } /> : ''}
                                                <p class="card-text m-0">{post.content}</p>
                                                <ul class="list-inline mb-1">
                                                    <li class="pr-1"><a href="#" class="text-muted"><span class="la la-heart-o"></span> Like</a></li>
                                                    <li type="text" class="pr-1"><a
                                                        value={ post.id }
                                                        class="text-muted" onClick={ (e) => this.showCommentBox(post.id) }><span class="la la-comments-o"></span> Comment</a></li>
                                                    <li><a href="#" class="text-muted"><span class="la la-share-alt"></span> Share</a></li>
                                                </ul>

                                                {(post.comments || []).map(comment => (
                                                    <div key={ comment.id } class="media">
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
                                                                <li class="pr-1"><a value={ comment }
                                                                    class="text-muted" onClick={ (e) => this.toggleReply(comment) }><span class="la la-comments-o" ></span> Reply</a></li>
                                                                {!comment.isReply ? '' : <Mutation
                    mutation={ REPLY_COMMENT }
                    variables={ {
                        id: comment.id,
                        input: {
                            authorId: JSON.parse(localStorage.getItem('userId')),
                            postId: post.id,
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
                                                            {comment.replys.length > 0 ? (comment.replys.map(reply => (
                                                                <div key={ reply.id } class="media">
                                                                    <div class="media-left pr-1">
                                                                        <a href="#">
                                                                            <span class="avatar avatar-online"><img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" /></span>
                                                                        </a>
                                                                    </div>
                                                                    <div class="media-body">
                                                                        <p class="text-bold-600 mb-0"><a href="#">{reply.author.username}</a></p>
                                                                        <p class="m-0">{reply.reply}</p>
                                                                        <ul class="list-inline mb-1">
                                                                            <li class="pr-1"><a href="#" class="text-muted"><span class="la la-heart-o"></span> Like</a></li>
                                                                            <li class="pr-1"><a
                                                                                onClick={ e => this.toggleReplyReply(reply) }
                                                                                class="text-muted"><span class="la la-comments-o"></span> Replay</a>{ reply.id }</li>
                                                                            {!reply.isReply ? '' : <Mutation
                                                                    mutation={ REPLY_REPLY }
            variables={ {
                id: reply.id,
                input: {
                    authorId: JSON.parse(localStorage.getItem('userId')),
                    postId: reply.post.id,
                    commentId: reply.comment.id,
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

                                                                        {!reply.replies.length <= 0 ? (reply.replies.map(reply => (
                                                                            <div key={ reply.id } class="media">
                                                                                <div class="media-left pr-1">
                                                                                    <a href="#">
                                                                                        <span class="avatar avatar-online"><img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" /></span>
                                                                                    </a>
                                                                                </div>
                                                                                <div class="media-body">
                                                                                    <p class="text-bold-600 mb-0"><a href="#">Kessie</a></p>
                                                                                    <p class="m-0">{ reply.reply }</p>
                                                                                    <ul class="list-inline mb-1">
                                                                                        <li class="pr-1"><a href="#" class="text-muted"><span class="la la-heart-o"></span> Like</a></li>
                                                                                        <li class="pr-1"><a
                                                                                            onClick={ e => this.toggleReplyLv2(reply) }
                                                                                            class="text-muted"><span class="la la-comments-o"></span> Reply</a>{ reply.id }</li>
                                                                                        {!reply.isReply ? '' : <Mutation
                                                                                            mutation={ REPLY_REPLY }
                                                                                            variables={ {
                                                                                                id: reply.id,
                                                                                                input: {
                                                                                                    authorId: JSON.parse(localStorage.getItem('userId')),
                                                                                                    postId: reply.post.id,
                                                                                                    commentId: reply.comment.id,
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
                                                                                    {reply.replies.length > 0 ? (reply.replies.map(reply => (
                                                                                        <div key={ reply.id } class="media">
                                                                                            <div class="media-left pr-1">
                                                                                                <a href="#">
                                                                                                    <span class="avatar avatar-online"><img src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="avatar" /></span>
                                                                                                </a>
                                                                                            </div>
                                                                                            <div class="media-body">
                                                                                                <p class="text-bold-600 mb-0"><a href="#">Boby</a></p>
                                                                                                <p class="m-0">{reply.reply}</p>
                                                                                                <ul class="list-inline mb-1">
                                                                                                    <li class="pr-1"><a href="#" class="text-muted"><span class="la la-heart-o"></span> Like</a></li>
                                                                                                    <li class="pr-1"><a
                                                                                                        onClick={ e => this.toggleReplyLv3(reply) }
                                                                                                        class="text-muted"><span class="la la-comments-o"></span> Replay</a></li>
                                                                                                    {!reply.isReply ? '' : <Mutation
                                                                                                        mutation={ REPLY_REPLY }
                                                                                                        variables={ {
                                                                                                            id: reply.id,
                                                                                                            input: {
                                                                                                                authorId: JSON.parse(localStorage.getItem('userId')),
                                                                                                                postId: reply.post.id,
                                                                                                                commentId: reply.comment.id,
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
                                                                                            </div>
                                                                                        </div>
                                                                                    ))) : ''}                                                                       </div>
                                                                            </div>
                                                                        ))) : ''}

                                                                    </div>
                                                                </div>
                                                            ))) : ''}

                                                        </div>
                                                    </div>
                                                ))}

                                                {!post.isComment ? '' :
                                                <Mutation
                                                        mutation={ POST_COMMENT }
                                                        variables={ { input: { postId: post.id, authorId: JSON.parse(localStorage.getItem('userId')), comment: this.state.comment } } }
                                                    >
                                                    {(postComment, { loading, error }) => {
                                                            return <Fragment>
                                                                <p>{post.id}</p>
                                                                <div class="card-body">
                                                                    <fieldset class="form-group position-relative has-icon-left mb-0">
                                                                        <input type="text" class="form-control" onChange={ e => this.setState({ comment: e.target.value }) }
                                                                            onKeyPress={ e => this.onEnterKey(e, postComment) }

                                                                            placeholder="Write comments..." />
                                                                        <div class="form-control-position">
                                                                            <i class="ft-message-square"></i>
                                                                        </div>
                                                                    </fieldset>
                                                                </div>
                                                            </Fragment>
                                                        }}
                                                </Mutation>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            ))}
        </Fragment>
    }
}
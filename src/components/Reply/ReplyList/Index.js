import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'
import update from 'react-addons-update'
import _ from 'lodash'

import { REPLY_REPLY } from './queries'

class ReplyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: this.props.comment,
            reply: ''
        }
        // this.showCommentBox = this.showCommentBox.bind(this)
        this.toggleReplyReply = this.toggleReplyReply.bind(this)
        this.toggleReplyLv2 = this.toggleReplyLv2.bind(this)
        this.toggleReplyLv3 = this.toggleReplyLv3.bind(this)
        // this.onEnterKey = this.onEnterKey.bind(this);
        this.replyFormChange = this.replyFormChange.bind(this)
        this.onReply = this.onReply.bind(this)
    }

    toggleReplyReply(e) {
        const filter = _.find(this.state.comment.replys, { 'id': e.id })

        const newReplyState = this.state.comment.replys.map(r => {
            if (r.id === e.id) {
                return Object.assign({}, r, {
                    isReply: !filter.isReply
                })
            } else {
                return r
            }
        })

        const prevState = this.state.comment
        const newCommentState = update(prevState, {
            replys: { $set: newReplyState }
        })
        this.setState({ comment: newCommentState })
    }
    
    toggleReplyLv2(e) {
        console.log(e)
        const isParentOf = e.isParentOf[ 0 ].id
        const reply = _.find(this.state.comment.replys, { id: isParentOf })
        const filter = _.find(reply.replies, { id: e.id })
        console.log(filter);

        // // new reply state
        const newIsReplyState = reply.replies.map(r2 => {
            if (r2.id === e.id) {
                return Object.assign({}, r2, {
                    isReply: !filter.isReply
                })
            } else {
                return r2
            }
        })

        // new replys state
        const newReplyState = this.state.comment.replys.map(r => {
            if (r.id === isParentOf) {
                return Object.assign({}, r, {
                    replies: newIsReplyState
                })
            } else {
                return r
            }
        })
        console.log(newReplyState);

        const prevState = this.state.comment
        const newCommentState = update(prevState, {
            replys: { $set: newReplyState }
        })
        this.setState({ comment: newCommentState })
    }

    // showCommentBox(e) {
    //     const filter = _.find(this.state.posts, { 'id': e });
    //     const newPostList = this.state.posts.map(p => {
    //         if (p.id === e) {
    //             return Object.assign({}, p, {
    //                 isComment: !filter.isComment
    //             });

    //         } else {
    //             return p;
    //         }
    //     })
    //     this.setState({ posts: newPostList })
    // }

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
    // onEnterKey(e, postComment) {
    //     if (e.key === 'Enter') {
    //         postComment().then(() => this.setState({ comment: '', showCommentBox: !this.state.showCommentBox })).then(() => window.location.reload())
    //     }
    // }
    render() {
        const { comment } = this.state
        console.log(comment)
        return comment.replys.length > 0 ? comment.replys.map(reply => (
            <div key={ reply.id } class="media">
                <div class="media-left pr-1">
                    <a href="#">
                        <span class="avatar avatar-online">
                            <img
                                src="../../../app-assets/images/portrait/small/avatar-s-18.png"
                                alt="avatar"
                            />
                        </span>
                    </a>
                </div>
                <div class="media-body">
                    <p class="text-bold-600 mb-0">
                        <a href="#">{reply.author.username}</a>
                    </p>
                    <p class="m-0">{reply.reply}</p>
                    <ul class="list-inline mb-1">
                        <li class="pr-1">
                            <a href="#" class="text-muted">
                                <span class="la la-heart-o" /> Like
                            </a>
                        </li>
                        <li class="pr-1">
                            <a
                                onClick={ e => this.toggleReplyReply(reply) }
                                class="text-muted"
                            >
                                <span class="la la-comments-o" /> Replay
                            </a>
                        </li>
                        {!reply.isReply ? (
                            ''
                        ) : (
                            <Mutation
                            mutation={ REPLY_REPLY }
                            variables={ {
                            id: reply.id,
                            input: {
                                authorId: JSON.parse(
                                localStorage.getItem('userId')
                                ),
                                postId: reply.post.id,
                                commentId: reply.comment.id,
                                reply: this.state.reply
                            }
                            } }
                        >
                                {replyComment => {
                          return (
                              <Fragment>
                                  <div class="card-body">
                                      <fieldset class="form-group position-relative has-icon-left mb-0">
                                          <input
                                    type="text"
                                    class="form-control"
                                    onChange={ this.replyFormChange }
                                    onKeyPress={ e =>
                                      this.onReply(e, replyComment)
                                    }
                                    placeholder="Write comments..."
                                  />
                                          <div class="form-control-position">
                                              <i class="ft-message-square" />
                                          </div>
                                      </fieldset>
                                  </div>
                              </Fragment>
                          );
                        }}
                            </Mutation>
                    )}
                    </ul>

                    {!reply.replies.length <= 0
                    ? reply.replies.map(reply => (
                        <div key={ reply.id } class="media">
                            <div class="media-left pr-1">
                                <a href="#">
                                    <span class="avatar avatar-online">
                                        <img
                                  src="../../../app-assets/images/portrait/small/avatar-s-18.png"
                                  alt="avatar"
                                />
                                    </span>
                                </a>
                            </div>
                            <div class="media-body">
                                <p class="text-bold-600 mb-0">
                                    <a href="#">{ reply.author.username }</a>
                                </p>
                                <p class="m-0">{reply.reply}</p>
                                <ul class="list-inline mb-1">
                                    <li class="pr-1">
                                        <a href="#" class="text-muted">
                                            <span class="la la-heart-o" /> Like
                                        </a>
                                    </li>
                                    <li class="pr-1">
                                        <a
                                  onClick={ e =>
                                    this.toggleReplyLv2(reply)
                                  }
                                  class="text-muted"
                                >
                                            <span class="la la-comments-o" />{' '}
                                  Reply
                                        </a>
                                    </li>
                                    {!reply.isReply ? (
                                ''
                              ) : (
                                  <Mutation
                                  mutation={ REPLY_REPLY }
                                  variables={ {
                                    id: reply.id,
                                    input: {
                                      authorId: JSON.parse(
                                        localStorage.getItem('userId')
                                      ),
                                      postId: reply.post.id,
                                      commentId: reply.comment.id,
                                      reply: this.state.reply
                                    }
                                  } }
                                >
                                      {replyComment => {
                                    return (
                                        <Fragment>
                                            <div class="card-body">
                                                <fieldset class="form-group position-relative has-icon-left mb-0">
                                                    <input
                                              type="text"
                                              class="form-control"
                                              onChange={
                                                this.replyFormChange
                                              }
                                              onKeyPress={ e =>
                                                this.onReply(
                                                  e,
                                                  replyComment
                                                )
                                              }
                                              placeholder="Write comments..."
                                            />
                                                    <div class="form-control-position">
                                                        <i class="ft-message-square" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </Fragment>
                                    );
                                  }}
                                  </Mutation>
                              )}
                                </ul>
                                {reply.replies.length > 0
                              ? reply.replies.map(reply => (
                                  <div key={ reply.id } class="media">
                                      <div class="media-left pr-1">
                                          <a href="#">
                                              <span class="avatar avatar-online">
                                                  <img
                                            src="../../../app-assets/images/portrait/small/avatar-s-18.png"
                                            alt="avatar"
                                          />
                                              </span>
                                          </a>
                                      </div>
                                      <div class="media-body">
                                          <p class="text-bold-600 mb-0">
                                              <a href="#">{ reply.author.username }</a>
                                          </p>
                                          <p class="m-0">{reply.reply}</p>
                                          <ul class="list-inline mb-1">
                                              <li class="pr-1">
                                                  <a
                                            href="#"
                                            class="text-muted"
                                          >
                                                      <span class="la la-heart-o" />{' '}
                                            Like
                                                  </a>
                                              </li>
                                              <li class="pr-1">
                                                  <a
                                            onClick={ e =>
                                              this.toggleReplyLv3(reply)
                                            }
                                            class="text-muted"
                                          >
                                                      <span class="la la-comments-o" />{' '}
                                            Replay
                                                  </a>
                                              </li>
                                              {reply.isReply ? (
                                          ''
                                        ) : (
                                            <Mutation
                                            mutation={ REPLY_REPLY }
                                            variables={ {
                                              id: reply.id,
                                              input: {
                                                authorId: JSON.parse(
                                                  localStorage.getItem(
                                                    'userId'
                                                  )
                                                ),
                                                postId: reply.post.id,
                                                commentId:
                                                  reply.comment.id,
                                                reply: this.state.reply
                                              }
                                            } }
                                          >
                                                {replyComment => {
                                              return (
                                                  <Fragment>
                                                      <div class="card-body">
                                                          <fieldset class="form-group position-relative has-icon-left mb-0">
                                                              <input
                                                        type="text"
                                                        class="form-control"
                                                        onChange={
                                                          this
                                                            .replyFormChange
                                                        }
                                                        onKeyPress={ e =>
                                                          this.onReply(
                                                            e,
                                                            replyComment
                                                          )
                                                        }
                                                        placeholder="Write comments..."
                                                      />
                                                              <div class="form-control-position">
                                                                  <i class="ft-message-square" />
                                                              </div>
                                                          </fieldset>
                                                      </div>
                                                  </Fragment>
                                              );
                                            }}
                                            </Mutation>
                                        )}
                                          </ul>
                                      </div>
                                  </div>
                                ))
                              : ''}
                            </div>
                        </div>
                      ))
                    : ''}
                </div>
            </div>
            )) : '';
    }
}

export default ReplyList
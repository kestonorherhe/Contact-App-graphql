import React, { Component, Fragment } from 'react' 
// import gql from 'graphql-tag' 
// import { Query, Mutation } from 'react-apollo'

import CommentList from '../Comment/CommentList/Index';
import CommentBox from '../Comment/CommentBox/Index'

export default class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.posts
        }
    }

    render() { 
        const { posts } = this.state
        return <Fragment>
            {posts.length > 0 ? posts.map(post => (
                <div key={ post.id } class="card shadow-none">
                    <div class="catd-body">
                        <div class="row p-2">
                            <div class="col-sm-6">
                                <div class="row">
                                    <div class="col-lg-4 col-3">
                                        <img
                                            src="../../../app-assets/images/portrait/medium/avatar-m-8.png"
                                            alt=""
                                            class="img-fluid rounded-circle width-50"
                                        />
                                    </div>
                                    <div class="col-lg-8 col-7 p-0">
                                        <h5 class="m-0">{post.author.username }</h5>
                                        <p>2 hours ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <i class="ft-more-vertical pull-right" />
                            </div>
                        </div>
                        <div class="write-post">
                            <div class="col-sm-12 px-2">
                                <p>{ post.content }</p>
                            </div>
                            <hr class="m-0" />
                            <div class="row p-1">
                                <div class="col-6">
                                    <div class="row">
                                        <div class="col-4 pr-0">
                                            <span>
                                                <i class="ft-heart h4 align-middle danger" />{' '}
                                                { post.likeCount }
                                            </span>
                                        </div>
                                        {/* <div class="col-8 pl-0">
                                        <ul class="list-unstyled users-list m-0">
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="John Doe" class="avatar avatar-sm pull-up">
                                                <img class="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-19.png" alt="Avatar" />
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Katherine Nichols" class="avatar avatar-sm pull-up">
                                                <img class="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-18.png" alt="Avatar" />
                                            </li>
                                            <li data-toggle="tooltip" data-popup="tooltip-custom" data-original-title="Joseph Weaver" class="avatar avatar-sm pull-up">
                                                <img class="media-object rounded-circle" src="../../../app-assets/images/portrait/small/avatar-s-17.png" alt="Avatar" />
                                            </li>
                                            <li class="avatar avatar-sm">
                                                <span class="badge badge-info">
                                +4 more
                                                </span>
                                            </li>
                                        </ul>
                                    </div> */}
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="pull-right">
                                        <span class="pr-1">
                                            <a><i class="ft-message-square h4 align-middle" />{' '}
                                                { post.commentCount }</a>
                                        </span>
                                        <span class="pr-1">
                                            <i class="ft-corner-up-right h4 align-middle" />{' '}
                                            23
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <CommentList 
                                comments={ post.comments }
                                isReply={ this.isReply }
                            />
                            <CommentBox 
                                post={ post } 
                            />
                        </div>
                    </div>
                </div>
                )) : 'no'}
        </Fragment>;
    }
}
import React, { Component } from 'react' 
export default class BlogList extends Component {
    render() {
        return <div>
            <div class="card shadow-none mt-2">
                <div class="card-body">
                    <div class="last-blog">
                        <h5 class="card-title mb-1">Last Blog</h5>
                        <hr />
                        <div class="row">
                            <div class="col-sm-12">
                                <h4>The emergence and growth of blogs</h4>
                                <p class="mt-1">Many blogs provide commentary on a particular subject or topic digital
                                    images.</p>
                                <p class="mt-3">5 hours ago</p>
                                <hr />
                            </div>
                            <div class="col-sm-12">
                                <h4>On 16 February 2011</h4>
                                <p class="mt-1">Many blogs provide commentary on a particular subject or topic digital
                                    images.</p>
                                <p class="mt-3">10 hours ago</p>
                                <hr />
                            </div>
                            <div class="col-sm-12">
                                <h4>With posts written by large numbers</h4>
                                <p class="mt-1">Many blogs provide commentary on a particular subject or topic digital
                                    images.</p>
                                <p class="mt-3">23 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
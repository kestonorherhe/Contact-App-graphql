import React, { Component } from 'react'

export default class ProfileSection extends Component {
    render () {
        const { userId, username, profileId } = this.props.user
        return <div>
            <div class="row">
                <div class="col-12">
                    <img src="../../../app-assets/images/gallery/timeline.jpg" class="img-fluid rounded" alt="timeline image" />
                    <div class="user-data text-center bg-white rounded pb-2 mb-md-2">
                        <img src="../../../app-assets/images/portrait/large/avatar-l-1.png" class="img-fluid rounded-circle width-150 profile-image shadow-lg border border-3"
                            alt="timeline image" />
                        <h4 class="mt-1 mb-0">Elaine Dreyfuss</h4>
                        <p class="m-0">San Francisco, CA</p>
                    </div>
                    <nav class="navbar navbar-expand-lg nav-margin">
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item px-2 active">
                                    <a class="nav-link" href={ `/user/${ username }/timeline/${ userId }` }>Timeline</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link" href="#">Friends</a>
                                </li>
                                <li class="nav-item px-2">
                                    <a class="nav-link" href={ `/user/${ username }/profile/${ profileId }` }>Profile</a>
                                </li>
                            </ul>
                            <div class="navbar-text">
                                <ul class="navbar-nav">
                                    <li class="nav-item px-2">
                                        <a class="nav-link" href="#">Photos</a>
                                    </li>
                                    <li class="nav-item px-2">
                                        <a class="nav-link" href="#">Videos</a>
                                    </li>
                                    <li class="nav-item px-2">
                                        <a class="nav-link" href="#">More</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    }
}
import React, { Component } from 'react' 

export default class ProfileHead extends Component {
    render() {
        return <div>
            <nav class="row">
                <nav class="col-12">
                    <nav class="card profile-with-cover">
                        <div class="card-img-top img-fluid bg-cover height-300" style={ { backGroundImage: `${ '../../../app-assets/images/carousel/22.jpg' }` } } ></div>
                        {/* <img src="../../../app-assets/images/gallery/timeline.jpg" class="img-fluid rounded" alt="timeline image" /> */}
                        <div class="media profil-cover-details w-100">
                            <div class="media-left pl-2 pt-2">
                                <a href="#" class="profile-image">
                                    <img src="../../../app-assets/images/portrait/small/avatar-s-8.png" class="rounded-circle img-border height-100" alt="Card image" />
                                </a>
                            </div>
                            <div class="media-body pt-3 px-2">
                                <div class="row">
                                    <div class="col">
                                        <h3 class="card-title">Jose Diaz</h3>
                                    </div>
                                    <div class="col text-right">
                                        <button type="button" class="btn btn-primary d-"><i class="la la-plus"></i> Follow</button>
                                        <div class="btn-group d-none d-md-block float-right ml-2" role="group" aria-label="Basic example">
                                            <button type="button" class="btn btn-success"><i class="la la-dashcube"></i> Message</button>
                                            <button type="button" class="btn btn-success"><i class="la la-cog"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <nav class="navbar navbar-light navbar-profile align-self-end">
                            <button class="navbar-toggler d-sm-none" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"></button>
                            <nav class="navbar navbar-expand-lg">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href={ `/user/${ JSON.parse(localStorage.getItem('user')).username }` }><i class="la la-line-chart"></i> Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="la la-user"></i> Profile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="la la-briefcase"></i> Projects</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="la la-heart-o"></i> Favourites</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#"><i class="la la-bell-o"></i> Notifications</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </nav>
                    </nav>
                </nav>
            </nav>
        </div>
    }
}
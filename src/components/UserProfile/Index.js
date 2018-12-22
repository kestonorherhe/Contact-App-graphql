import React, { Component } from 'react' 
import Navbar from '../Navbar/Index'
import ProfileHead from './ProfileHead/Index';
import TimeLine from './TimeLine/Index';
import ProfileIntro from '../ProfileIntro/Index';
import FriendList from '../FriendList/Index'
import SpotifyPlaylist from '../SpotifyPlaylist/Index';
import TwitterFeed from '../TwitterFeed/Index'
import NotificationList from '../NotificationList/Index';
import PhotoList from '../PhotoList/Index'
import BlogList from '../BlogList/Index';
import VideoList from '../VideoList/Index';

export default class UserProfile extends Component {
    render() {
        return <div class="app-content content">
            <Navbar />
            <div class="content-wrapper">
                <div class="content-header row"></div>
                <div class="content-body">
                    <nav id="user-profile">
                        <ProfileHead />
                        <div class='row'>
                            <div class='col-lg-3 col-md-6'>
                                <ProfileIntro />
                                <FriendList />
                                <SpotifyPlaylist />
                                <TwitterFeed />
                            </div>
                            <div class='col-lg-6 col-md-6'>
                                <section id="timeline" class="timeline-left timeline-wrapper">
                                    <TimeLine />
                                </section>
                            </div>
                            <div class='col-lg-3 col-md-12'>
                                <NotificationList />
                                <PhotoList />
                                <BlogList />
                                <VideoList />
                            </div>
                        </div>
                        
                    </nav>
                </div>
            </div>
        </div>
    }
}
import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag' 
import { Query } from 'react-apollo' 

// import update from 'react-addons-update'
import Navbar from '../Navbar/Index';
import Footer from '../Footer/Index';
import ProfileSection from '../ProfileSection/Index';
import ProfileIntro from '../ProfileIntro/Index';
import FriendList from '../FriendList/Index';
import SpotifyPlaylist from '../SpotifyPlaylist/Index';
import TwitterFeed from '../TwitterFeed/Index';
import MakePost from '../MakePost/Index';
import PostList from '../PostList/Index';
import NotificationList from '../NotificationList/Index';
import PhotoList from '../PhotoList/Index';
import VideoList from '../VideoList/Index';
import BlogList from '../BlogList/Index';

import { GET_POSTS } from './queries'

export default class Index extends Component {
    render() {
        document.querySelector('body').classList.add('fixed-navbar')
        const user = JSON.parse(localStorage.getItem('user'));
      localStorage.setItem('userId', JSON.stringify('5c0e8f0cd35e75208024a565'))
      return <Query
        query={ GET_POSTS }
        variables={ { query: { offset: 0, limit: 20 } } }
        errorPolicy="all"
      >
          {({ data, loading, error }) => {
            if (loading) {
              return <div>
                Loading...
              </div>
            }
          if (error) {
            return <div>
              Error
            </div>
          }

          return (
              <Fragment>
                  <div class="app-content content">
                      <Navbar />
                      <div class="content-wrapper">
                          <div class="content-body">
                              {/* <!-- User Feed --> */}
                              <section id="user-feed">

                                  {/* <!-- Left Side Content --> */}
                                  {/* <ProfileSection /> */}

                                  {/* <!-- Profile Intro --> */}
                                  <div class="row">
                                      <div class="col-lg-3 col-md-6 col-sm-12">
                                          {/* <ProfileIntro /> */}
                                          {/* <!-- friends-list --> */}
                                          <FriendList />
                                          {/* <!-- My Spotify Playlist --> */}
                                          <SpotifyPlaylist />
                                          {/* <!-- Twitter Feed --> */}
                                          <TwitterFeed />
                                      </div>
                                      {/* <!-- Feed Section --> */}
                                      <div class="col-lg-6 col-md-6 col-sm-12">
                                          {/* <!-- Write Post --> */}
                                          <MakePost />

                                          <Query
                                            query={ GET_POSTS }
                                            variables={ { query: { offset: 0, limit: 20 } } }
                                            errorPolicy="all"
                                          >
                                              { ({ data }) => {

                                              return <PostList posts={ data.posts } />
                                            }}
                                          </Query>
                                      </div>
                                      {/* <!-- Birthday Card --> */}
                                      <div class="col-lg-3 col-md-12 col-sm-12">
                                          <NotificationList />
                                          {/* <!-- Last Photos --> */}
                                          <PhotoList />
                                          {/* <!-- Last Blog --> */}
                                          <BlogList />
                                          {/* <!-- Last Video --> */}
                                          <VideoList />
                                      </div>
                                  </div>
                              </section>
                              {/* <!--/ User Feed --> */}
                          </div>
                      </div>
                  </div>
              </Fragment>
          )
        }}
      </Query>
    }
}
import React, { Component } from 'react'
import gql from 'graphql-tag' 
import { Query } from 'react-apollo'

const GET_PROFILE = gql`
  query GetProfile($id: ID!) {
    userProfile(id: $id) {
        id
        aboutMe
        favouriteTvShows
        favouriteMusicBand
        favouriteFood
    }
  }
`;

export default class ProfileIntro extends Component {
    render() {
        const profileId = JSON.parse(localStorage.getItem('profileId'))
        return <Query
        query={ GET_PROFILE }
        variables={ { id: profileId } }
        >
            { ({ data, loading, error }) => {
                if (loading) {
                    return (
                        <div>Loading...</div>
                    )
                }

                if (error) {
                    return (
                        <div>Error...</div>
                    )
                }

                return <div>
                    <div class="card shadow-none">
                        <div class="card-body">
                            <h5 class="card-title">Profile Intro</h5>
                            <hr />
                            <div class="about-me mt-2">
                                <h5 class="card-title mb-1">About Me</h5>
                                <p class="font-small-3">{ data.userProfile.aboutMe }</p>
                            </div>
                            <div class="favourite-show mt-2">
                                <h5 class="card-title mb-1">Favourite TV Shows</h5>
                                <p class="font-small-3">{ data.userProfile.favouriteTvShows.join(', ') }</p>
                            </div>
                            <div class="favourite-band mt-2">
                                <h5 class="card-title mb-1">Favourite Music Bands</h5>
                                <p class="font-small-3">{ data.userProfile.favouriteMusicBand.join(', ') }</p>
                            </div>
                            <div class="favourite-food mt-2">
                                <h5 class="card-title mb-1">Favourite Food</h5>
                                <p class="font-small-3">{ data.userProfile.favouriteFood.join(', ') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            } }
        </Query>
    }
}
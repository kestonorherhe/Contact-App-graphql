import React, { Component, Fragment } from 'react' 
import gql from 'graphql-tag' 
import { Mutation } from 'react-apollo' 

const CREATE_POST = gql`
  mutation CreatePost($id: ID!, $input: PostInput!) {
    createPost(id: $id, input: $input) {
      content
    }
  }
`;

export default class MakePost extends Component {
    state = {
        post: {
            content: '',
            imageUrl: ''
        }
    }

    handleFormInput = e => {
        let newProps = this.state.post
        newProps[ e.target.name ] = e.target.value
        this.setState({ post: newProps })
        console.log(this.state.post);
    }

    onSubmit = (e, createPost) => {
        // e.preventDefault()
        createPost().then(() => this.setState({ post: { content: '', imageUrl: '' } }))
        // window.location.reload()
    }
    render() {
        const { content, imageUrl } = this.state.post
        const { userId } = this.props
        return (
            <Mutation
            mutation={ CREATE_POST }
            variables={ { id: userId ,input: { content: content, imageUrl: imageUrl } } }
            >
                {(createPost, { loading, error }) => {
                    if (loading) {
                        return (
                            <div>Creating post...</div>
                        )
                    }

                    if (error) {
                        return (
                            <div>An Unexpected Error Occurred...</div>
                        )
                    }

                    return <Fragment>
                        <div class="card shadow-none">
                            <div class="catd-body">
                                <div class="feed-tabs">
                                    <ul class="nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link px-2 py-2 px-sm-1 active" id="home-tab" data-toggle="tab" href="#home"
                                                role="tab" aria-controls="home" aria-selected="true"><i class="ft-activity"></i>
                                                Status</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-2 py-2 px-sm-1" id="profile-tab" data-toggle="tab" href="#profile"
                                                role="tab" aria-controls="profile" aria-selected="false"><i class="ft-camera"></i>
                                                Multimedia</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link px-2 py-2 px-sm-0" id="contact-tab" data-toggle="tab" href="#contact"
                                                role="tab" aria-controls="contact" aria-selected="false"><i class="ft-edit-2"></i>
                                                Blog Post</a>
                                        </li>
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
                                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
                                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
                                    </div>
                                </div>
                                <form class="write-post" onSubmit={ e=> this.onSubmit(e, createPost) }>
                                    <div class="form-group">
                                        <textarea class="form-control border-0" id="exampleFormControlTextarea1"
                                        name='content'
                                        onChange={ this.handleFormInput.bind(this) }
                                        placeholder="say something..."
                                        rows="5"></textarea>
                                    </div>
                                    <hr class="m-0" />
                                    <div class="row px-1">
                                        <div class="col-6 pt-2">
                                            <i class="ft-image ml-1 mr-2 mr-sm-0 h3"></i> <i class="ft-monitor mr-2 mr-sm-0 h3"></i>
                                            <i class="ft-map-pin h3"></i>
                                        </div>
                                        <div class="col-6 pt-1">
                                            <button type="submit" class="btn btn-primary btn-min-width btn-glow mr-1 mb-1 pull-right">Post
                                    Status</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Fragment>
                }}
            </Mutation>
        )
    }
}
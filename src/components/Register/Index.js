import React, { Component, Fragment } from 'react' 
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      id
      username
    }
  }
`;

export default class Login extends Component {
    state = {
        user: {
            username: '',
            email: '',
            password: ''
        }
    }

    handleFormInput = e => {
        let newProps = this.state.user
        newProps[ e.target.name ] = e.target.value 
        this.setState({ user: newProps })
    }

    onSubmit = (e, createUser) => {
        // console.log( createUser);
        e.preventDefault()
        createUser().then(() => this.props.history.push('/login'))
    }

    render() {
        const { user } = this.state
        return (
            <Mutation 
            mutation={ CREATE_USER }
            variables={ { input: user } }
            >
                {(createUser, { data, loading, error }) => (
                    <div>
                        <Fragment>
                            <div class="app-content content">
                                <div class="content-wrapper">
                                    <div class="content-header row">
                                    </div>
                                    <div class="content-body"><section class="flexbox-container">
                                        <div class="col-12 d-flex align-items-center justify-content-center">
                                            <div class="col-md-4 col-10 box-shadow-2 p-0">
                                                <div class="card border-grey border-lighten-3 px-1 py-1 m-0">
                                                    <div class="card-header border-0 pb-0">
                                                        <div class="card-title text-center">
                                                            <img src="../../../app-assets/images/logo/logo-dark.png" alt="branding logo"/>
                                                        </div>
                                                        <h6 class="card-subtitle line-on-side text-muted text-center font-small-3 pt-2"><span>Easily Using</span></h6>
                                                    </div>
                                                    <div class="card-content">
                                                        <div class="text-center">
                                                            <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-facebook"><span class="la la-facebook"></span></a>
                                                            <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-twitter"><span class="la la-twitter"></span></a>
                                                            <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-linkedin"><span class="la la-linkedin font-medium-4"></span></a>
                                                            <a href="#" class="btn btn-social-icon mr-1 mb-1 btn-outline-github"><span class="la la-github font-medium-4"></span></a>
                                                        </div>
                                                        <p class="card-subtitle line-on-side text-muted text-center font-small-3 mx-2 my-1"><span>OR Using Email</span></p>
                                                        <div class="card-body">
                                                            <form
                                                            onSubmit={ e => this.onSubmit(e, createUser) }
                                                            class="form-horizontal">
                                                                <fieldset class="form-group position-relative has-icon-left">
                                                                    <input type="text" class="form-control" id="user-name"
                                                                    name="username"
                                                                    onChange={ this.handleFormInput.bind(this) }
                                                                    placeholder={ this.state.user.username === '' ? 'Username' : this.state.user.username }/>
                                                                    <div class="form-control-position">
                                                                        <i class="ft-user"></i>
                                                                    </div>
                                                                </fieldset>
                                                                <fieldset class="form-group position-relative has-icon-left">
                                                                    <input type="email" class="form-control" id="user-email"
                                                                    name="email"
                                                                    onChange={ this.handleFormInput.bind(this) }
                                                                    placeholder={ this.state.user.email === '' ? 'Email Address ' : this.state.user.email } required/>
                                                                    <div class="form-control-position">
                                                                        <i class="ft-mail"></i>
                                                                    </div>
                                                                </fieldset>
                                                                <fieldset class="form-group position-relative has-icon-left">
                                                                    <input type="password" class="form-control" id="user-password"
                                                                    name="password"
                                                                    onChange={ this.handleFormInput.bind(this) }
                                                                    placeholder={ this.state.user.password === '' ? 'Password' : this.state.user.password } required/>
                                                                    <div class="form-control-position">
                                                                        <i class="la la-key"></i>
                                                                    </div>
                                                                </fieldset>
                                                                <div class="form-group row">
                                                                    <div class="col-md-6 col-12 text-center text-sm-left">
                                                                        <fieldset>
                                                                            <input type="checkbox" id="remember-me" class="chk-remember"/>
                                                                            <label for="remember-me"> Remember Me</label>
                                                                        </fieldset>
                                                                    </div>
                                                                    <div class="col-md-6 col-12 float-sm-left text-center text-sm-right"><a href="recover-password.html" class="card-link">Forgot Password?</a></div>
                                                                </div>
                                                                <button type="submit" class="btn btn-outline-info btn-block"><i class="ft-user"></i> Register</button>
                                                            </form>
                                                        </div>
                                                        <div class="card-body">
                                                            <a href="/" class="btn btn-outline-danger btn-block"><i class="ft-unlock"></i> Login</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    </div>
                )}
            </Mutation>    
        )
    }
}
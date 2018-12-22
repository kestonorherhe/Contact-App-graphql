import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo' 
import ApolloClient from 'apollo-boost' 

import Home from './components/Home/Index'
import UserProfile from './components/UserProfile/Index'
import Login from './components/Login/Index'
import Register from './components/Register/Index'

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

// Get app from the document
var contentNode = document.getElementById('root');

ReactDOM.render(
    <ApolloProvider client={ client }>
        <Router>
            <Switch>
                <Route exact path='/' component={ Login } />
                <Route exact path='/register' component={ Register } />
                <Route exact path='/user/:username' component={ Home } />
                <Route exact path='/user/:username/timeline/:userId' component={ UserProfile } />
                <Route exact path='/user/:username/profile/:profileId' component={ UserProfile } />
            </Switch>
        </Router>
    </ApolloProvider>,
    contentNode
);  
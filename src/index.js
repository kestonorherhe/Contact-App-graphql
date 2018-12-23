import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import App from './components/App'

// Initialize client
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
})

// Get app from the document
var contentNode = document.getElementById('root');

ReactDOM.render(
    <ApolloProvider client={ client }>
        <Router>            
            <Switch>
                <Route path='/' component={ App } />
            </Switch>
        </Router>
    </ApolloProvider>,
    contentNode
);  
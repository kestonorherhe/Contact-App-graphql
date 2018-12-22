import React, { Component } from 'react'
import gql from 'graphql-tag' 
import { Query } from 'react-apollo'

const LOGIN = gql`
  query Login ($query: Credential!){
  login(query: $query){
    id
    username
    password
  }
}
`

class Authenticate extends Component {
    render() {
        console.log(this.props);
        console.log('this.props');
        return (
            <Query
                query={ LOGIN }
                variables={ { query: login } }
                notifyOnNetworkStatusChange={ true }
            >
                {({ data, loading, error }) => {
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
                    console.log(data);
                }}
            </Query>
        )
    }
}

export default Authenticate
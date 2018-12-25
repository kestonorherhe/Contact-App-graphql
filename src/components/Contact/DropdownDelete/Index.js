import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import { DELETE_CONTACT } from './queries'

export default class DropdownDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    // handle delete
    handleDelete = (deleteContact) => {
        deleteContact()
        window.location.replace('/')
    }
    render() {
        const { id } = this.state
        return <Mutation
        mutation={ DELETE_CONTACT }
        variables={ { id: id } }
        errorPolicy="all"
        >
            { (deleteContact, { loading, error }) => {
                return <Fragment>
                    <a onClick={ () => this.handleDelete(deleteContact) } class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                </Fragment>
            }}
        </Mutation>
    }
}
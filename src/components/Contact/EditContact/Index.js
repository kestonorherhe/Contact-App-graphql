import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import { EDIT_CONTACT } from './queries'

export default class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                name: '',
                email: '',
                phone: ''
            }
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handle form change
    handleFormChange = (e) => {
        // const id = e.target.name(id)
        const newState = this.state.contact
        newState[ e.target.name ] = e.target.value 
        // console.log(newState)
        this.setState({ contact: newState })
        // console.log(this.state.contact)
    }
    // handle form submit
    handleSubmit = (e, editContact) => {
        editContact()
    }
    render() {
        const { id, name, email, phone } = this.state.contact
        return <Mutation
        mutation={ EDIT_CONTACT }
        variables={ { id: id, input: {
            name: name,
            email: email,
            phone: phone
        } } }
        >
            { (editContact, { data, loading, error }) => {
                console.log(data);
                return <Fragment>
                    <div class="modal fade" id="EditContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <section class="contact-form">
                                    <form onSubmit={ this.handleSubmit } id="form-edit-contact" class="contact-input">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Edit Contact</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <fieldset class="form-group col-12">
                                                <input 
                                                id="id"
                                                class="name form-control"
                                                type="text"
                                                readOnly={ true }
                                                onMouseOver={ this.handleFormChange }
                                                name="id"/>
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="text" id="name"
                                                    name="name"
                                                    class="name form-control"
                                                    autoFocus={ true }
                                                    onFocus={ this.handleFormChange }
                                                    onChange={ this.handleFormChange }
                                                    placeholder="Name" />
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="text" id="email"
                                                    name="email"
                                                    class="email form-control"
                                                    onFocus={ this.handleFormChange }
                                                    onChange={ this.handleFormChange }
                                                    placeholder="Email" />
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="text" id="phone"
                                                    name="phone"
                                                    class="phone form-control"
                                                    onFocus={ this.handleFormChange }
                                                    onChange={ this.handleFormChange }
                                                    placeholder="Phone Number" />
                                            </fieldset>
                                        </div>
                                        <div class="modal-footer">
                                            <fieldset class="form-group position-relative has-icon-left mb-0">
                                                <button type="submit" id="edit-contact-item" 
                                                onClick={ (e) =>  this.handleSubmit(e,editContact) }
                                                class="btn btn-info edit-contact-item" data-dismiss="modal"><i
                                                    class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Edit</span></button>
                                            </fieldset>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }}
        </Mutation>
    }
}
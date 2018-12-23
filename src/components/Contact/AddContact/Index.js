import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo'

import { ADD_CONTACT } from './queries'

export default class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contact: {
                name: '',
                email: '',
                phone: '',
                isFavorite: 'false',
                imageUrl: ''
            }
        }
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    // handle form change
    handleFormChange = (e) => {
        const newProps = this.state.contact
        newProps[ e.target.name ] = e.target.value
        this.setState({ contact: newProps })
        // console.log(this.state.contact)
    }

    // on form submit
    handleFormSubmit = (e, addContact) => {
        e.preventDefault()
        console.log(e);
        console.log(addContact);
        addContact().then(() => console.log('added'))
    }
    render() {
        const { contact } = this.state
        return <Mutation
        mutation={ ADD_CONTACT }
        variables={ { input: contact } }
        >
            { (addContact, { loading, error }) => {
                if (loading) {
                    return <div>
                        Adding contact...
                    </div>
                }

                if (error) {
                    return <div>
                        An Unexpected Error Occurred...
                    </div>
                }

                return <Fragment>
                    <div class="modal fade" id="AddContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
                        aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <section class="contact-form">
                                    <form onSubmit={ e =>  this.handleFormSubmit(addContact) } id="form-add-contact" class="contact-input">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel1">Add New Contact</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <fieldset class="form-group col-12">
                                                <input type="text" id="contact-name" class="contact-name form-control"
                                                    name="name"
                                                    onChange={ this.handleFormChange }
                                                    placeholder="Name" />
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="text" id="contact-email" class="contact-email form-control"
                                                    name="email"
                                                    onChange={ this.handleFormChange }
                                                    placeholder="Email" />
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="text" id="contact-phone" class="contact-phone form-control"
                                                    name="phone"
                                                    onChange={ this.handleFormChange }
                                                    placeholder="Phone Number" />
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="checkbox" id="favorite"
                                                    name="isFavorite"
                                                    value={ this.state.contact.isFavorite === 'false' ? true : false }
                                                    onChange={ this.handleFormChange }
                                                    class="contact-fav input-chk" /> Favorite
                                            </fieldset>
                                            <fieldset class="form-group col-12">
                                                <input type="file" class="form-control-file"
                                                    id="user-image"
                                                    name="imageUrl"
                                                />
                                            </fieldset>
                                        </div>
                                        <div class="modal-footer">
                                            <fieldset class="form-group position-relative has-icon-left mb-0">
                                                <button type="submit" id="add-contact-item"
                                                onClick={ e => this.handleFormSubmit(e, addContact) }
                                                    data-dismiss="modal"
                                                    class="btn btn-info add-contact-item" ><i
                                                        class="icon-paper-plane d-lg-none"></i> <span class="icon-paper-plane d-none d-lg-block">Add New</span></button>
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
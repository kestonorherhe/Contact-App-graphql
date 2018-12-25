import React, { Component, Fragment } from 'react'

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: this.props.contacts
        }
    }
    render() {
        const { contacts } = this.state
        return <Fragment>
            { contacts.length > 0 ? contacts.map(contact => (
                <tr key={ contact.id }>
                    <td class="id hidden">{ contact.id }</td>
                    <td>
                        <div class="media">
                            <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                                alt="avatar" /><i></i></span></div>
                            <div class="media-body media-middle">
                                <a class="media-heading name">{ contact.name }</a>
                            </div>
                        </div>
                    </td>
                    <td class="text-center">
                        <a class="email" href="mailto:email@example.com">{ contact.email }</a>
                    </td>
                    <td class="phone">{ contact.phone }</td>
                    <td class="text-center">                        
                        { contact.isFavorite === "true" ? <div class="icon-star primary"></div> : <div class="icon-star"></div> }
                    </td>
                    <td>
                        <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="ft-edit-2"></i></a>
                        <a class="danger delete mr-1"><i class="ft-trash"></i></a>
                        <span class="dropdown">
                            <a id="btnSearchDrop2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                                class="ft-more-horizontal"></i></a>
                            <span aria-labelledby="btnSearchDrop2" class="dropdown-menu mt-1 dropdown-menu-right">
                                <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                    Edit</a>
                                <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                                <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                                <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                                <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                                <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                            </span>
                        </span>
                    </td>
                </tr>
            )) : 'no contacts' }
        </Fragment>
    }
}
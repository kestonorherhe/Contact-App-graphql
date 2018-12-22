import React, { Component } from 'react';
import update from 'react-addons-update'
import Header from '../Header/Index'
import Navbar from '../Navbar/Index';
import SearchBox from '../SearchBox/Index';
import ContactList from '../ContactList/Index';

export default class Index extends Component {
    render() {
        return <div class="app-content content">
            <Header />
            <div class="content-wrapper">
                <div class="content-detached content-right">
                    <div class="content-body"><section class="row">
                        <SearchBox />
                    </section>

                        <section class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-head">
                                        <div class="card-header">
                                            <h4 class="card-title">All Contacts</h4>
                                            <a class="heading-elements-toggle"><i class="la la-ellipsis-h font-medium-3"></i></a>
                                            <div class="heading-elements">
                                                <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#AddContactModal"><i class="ft-plus white"></i>
                                                    Add Contacts</button>
                                                <div class="modal fade" id="AddContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1"
                                                    aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <section class="contact-form">
                                                                <form id="form-add-contact" class="contact-input">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel1">Add New Task</h5>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="contact-name" class="contact-name form-control" placeholder="Name" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="contact-email" class="contact-email form-control" placeholder="Email" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="contact-phone" class="contact-phone form-control" placeholder="Phone Number" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="checkbox" id="favorite" class="contact-fav input-chk" /> Favorite
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="file" class="form-control-file" id="user-image" />
                                                                        </fieldset>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <fieldset class="form-group position-relative has-icon-left mb-0">
                                                                            <button type="button" id="add-contact-item" class="btn btn-info add-contact-item" data-dismiss="modal"><i
                                                                                                    class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Add New</span></button>
                                                                        </fieldset>
                                                                    </div>
                                                                </form>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal fade" id="EditContactModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                                                        aria-hidden="true">
                                                    <div class="modal-dialog" role="document">
                                                        <div class="modal-content">
                                                            <section class="contact-form">
                                                                <form id="form-edit-contact" class="contact-input">
                                                                    <div class="modal-header">
                                                                        <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
                                                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                            <span aria-hidden="true">&times;</span>
                                                                        </button>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="name" class="name form-control" placeholder="Name" />
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="email" class="email form-control" placeholder="Email"/>
                                                                        </fieldset>
                                                                        <fieldset class="form-group col-12">
                                                                            <input type="text" id="phone" class="phone form-control" placeholder="Phone Number"/>
                                                                        </fieldset>
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <fieldset class="form-group position-relative has-icon-left mb-0">
                                                                            <button type="button" id="edit-contact-item" class="btn btn-info edit-contact-item" data-dismiss="modal"><i
                                                                                                                class="la la-paper-plane-o d-lg-none"></i> <span class="d-none d-lg-block">Edit</span></button>
                                                                        </fieldset>
                                                                    </div>
                                                                </form>
                                                            </section>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span class="dropdown">
                                                    <button id="btnSearchDrop1" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="btn btn-warning dropdown-toggle dropdown-menu-right btn-sm"><i
                                                                                        class="ft-download-cloud white"></i></button>
                                                    <span aria-labelledby="btnSearchDrop1" class="dropdown-menu mt-1 dropdown-menu-right">
                                                        <a href="#" class="dropdown-item"><i class="ft-upload"></i> Import</a>
                                                        <a href="#" class="dropdown-item"><i class="ft-download"></i> Export</a>
                                                        <a href="#" class="dropdown-item"><i class="ft-shuffle"></i> Find Duplicate</a>
                                                    </span>
                                                </span>
                                                <button class="btn btn-default btn-sm"><i class="ft-settings white"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-content">
                                        <div class="card-body">
                                            {/* <!-- Task List table --> */}
                                            {/* <button type="button" class="btn btn-danger delete-all">Delete All</button> */}
                                            <div class="table-responsive">
                                                <table id="users-contacts" class="table table-white-space table-bordered row-grouping display no-wrap icheck table-middle text-center">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Favorite</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <ContactList />
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <th></th>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Phone</th>
                                                            <th>Favorite</th>
                                                            <th>Actions</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <Navbar />
            </div>
        </div>
    }
}
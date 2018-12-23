import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo'

import Header from '../Header/Index'
import Navbar from '../Navbar/Index';
import SearchBox from '../SearchBox/Index';
import ContactList from '../Contact/ContactList/Index';
import AddContact from '../Contact/AddContact/Index';
import EditContact from '../Contact/EditContact/Index';

import { CONTACTS } from './queries'

export default class Index extends Component {
    render() {
        return <Query
            query={ CONTACTS }
            variables={ { query: { offset:0, limit: 50 } } }
            errorPolicy="all"
        >
            { ({ data, loading, error }) => {
                if (loading) {
                    return <div>
                        Loading...
                    </div>
                }

                if (error) {
                    return <div>
                        Error...
                    </div>
                }
                console.log(data)
                return <Fragment>
                    <div class="app-content content">
                        <Header />
                        <div class="content-wrapper">
                            <div class="content-detached content-right">
                                <div class="content-body"><section class="row">
                                    <SearchBox />
                                </section>
                                    <AddContact />
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

                                                            <EditContact />
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
                                                                    <ContactList    contacts={ data.contacts } 
                                                                    />
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
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
                </Fragment>
            }}
        </Query>
    }
}
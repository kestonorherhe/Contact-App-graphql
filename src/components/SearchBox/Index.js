import React, { Component } from 'react'

export default class SearchBox extends Component {
    render() {
        return <div class="col-12">
            <div class="card">
                <div class="card-body">
                    <div class="bug-list-search">
                        <div class="bug-list-search-content">
                            <form action="#">
                                <div class="position-relative">
                                    <input type="search" id="search-contacts" class="form-control" placeholder="Search contacts..." />
                                    <div class="form-control-position">
                                        <i class="la la-search text-size-base text-muted la-rotate-270"></i>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
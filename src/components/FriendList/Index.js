import React, { Component } from 'react'

export default class FriendList extends Component {
    render() {
        return <div>
            <div class="card shadow-none mt-2">
                <div class="card-body">
                    <div class="friends-list">
                        <h5 class="card-title mb-1">Friends List</h5>
                        <hr />
                        <span>
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-1.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-2.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-3.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-4.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-5.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-6.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-7.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                            <img src="../../../app-assets/images/portrait/medium/avatar-m-8.png" alt="" class="img-fluid rounded-circle width-30 mrb-5px" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    }
}
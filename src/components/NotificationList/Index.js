import React, { Component } from 'react' 
export default class NotificationList extends Component {
    render() {
        return <div>
            <div class="card text-white bg-primary mb-3">
                <div class="card-header">
                    <h3><i class="ft-award white"></i> <i class="ft-more-horizontal white pull-right"></i></h3>
                </div>
                <div class="card-body pt-0">
                    <img src="../../../app-assets/images/portrait/medium/avatar-m-4.png" alt="" class="img-fluid rounded-circle width-50" />
                    <p>Today is</p>
                    <h3 class="white">Marina Valentine’s Birthday!</h3>
                    <p class="card-text">Some quick example text to build on the card.</p>
                </div>
            </div>
        </div>
    }
}
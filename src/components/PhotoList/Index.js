import React, { Component } from 'react' 
export default class PhotoList extends Component {
    render() {
        return <div>
            <div class="card shadow-none mt-2">
                <div class="card-body">
                    <div class="last-photos">
                        <h5 class="card-title mb-1">Last Photos</h5>
                        <hr />
                        <div class="row">
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-1.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-2.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-3.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-4.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-5.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-6.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-7.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-8.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                            <div class="col-4">
                                <img src="../../../app-assets/images/backgrounds/bg-9.jpg" alt="" class="img-fluid mb-2 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
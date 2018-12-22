import React, { Component } from 'react' 

export default class VideoList extends Component {
    render() {
        return <div>
            <div class="card shadow-none mt-2">
                <div class="card-body">
                    <div class="last-video">
                        <h5 class="card-title mb-1">Last Video</h5>
                        <hr />
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe src="https://www.youtube.com/embed/fRh_vgS2dFE" allow="autoplay; encrypted-media"
                                        allowfullscreen></iframe>
                                </div>
                                <hr />
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe width="1280" height="720" src="https://www.youtube.com/embed/cBVGlBWQzuc"
                                        allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
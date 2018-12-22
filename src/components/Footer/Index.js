import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return <div>
            <footer class="footer fixed-bottom footer-light ">
                <p class="clearfix blue-grey lighten-2 text-sm-center mb-0 px-2">
                    <span class="float-md-left d-block d-md-inline-block">
                    Copyright &copy; 2018 <a class="text-bold-800 grey darken-2" href="https://themeforest.net/user/pixinvent/portfolio?ref=pixinvent" target="_blank">
                        PIXINVENT{" "}
                    </a>, All rights reserved.{" "}
                    </span>
                    <span class="float-md-right d-block d-md-inline-blockd-none d-lg-block">
                    Hand-crafted & Made with <i class="ft-heart pink" />
                    </span>
                </p>
            </footer>
        </div>;
    }
}
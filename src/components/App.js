import React from 'react';
import Routes from '../components/Routes';

import $ from 'jquery';
import jQuery from 'jquery';
window.jQuery = window.$ = $;

export default class App extends React.Component {
  render() {
    return (
        <div class="app-content content">
            <Routes />
        </div>
    );
  }
}  

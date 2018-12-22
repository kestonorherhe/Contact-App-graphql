import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './Home/Index'
import UserProfile from './UserProfile/Index'

const Routes = () => (
    <Switch>
        <Route exact path='/user/:username' component={ Index } />
        <Route exact path='/user/:username/timeline/:userid' component={ UserProfile } />
    </Switch>
)

export default Routes
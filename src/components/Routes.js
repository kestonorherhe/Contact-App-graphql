import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Index from './ContactWindow/Index'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={ Index } />
    </Switch>
)

export default Routes
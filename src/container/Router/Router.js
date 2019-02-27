import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from '../Index'
import PersonalCenter from '../PersonalCenter/PersonalCenter';
import Transfer from '../finance/Finance';
import AboutWe from '../AboutWe/AboutWe';
import Product from '../Product/Product';
import HelpCenter from '../HelpCenter/HelpCenter'

export default class BasicRouter extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/PersonalCenter" component={PersonalCenter}></Route>
                    <Route path="/finance/transfer" component={Transfer}></Route>
                    <Route path="/aboutWe" component={AboutWe}></Route>
                    <Route path="/ProductList" component={Product}></Route>
                    <Route path="/helpCenter" component={HelpCenter}></Route>
                    <Redirect to="/"/>
                </Switch>
            </HashRouter>
        )
    }
}

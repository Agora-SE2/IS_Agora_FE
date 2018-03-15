import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage.js';
import AboutPage from './AboutPage.js';
import CategoryPage from './CategoryPage.js';
import ProfilePage from './ProfilePage.js';
import SearchPage from './SearchPage.js';
import ProyectoLeyPageRoute from './ProyectoLeyPage.js';
import RegisterPage from './RegisterPage.js';

import './Page.css';

/**
 * TODO: switch to Links instead of anchor elements
 */

export default class PageRoute extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/about' component={AboutPage}/>
                    <Route path='/proyectoley/:id' component={ProyectoLeyPageRoute}/>
                    <Route path='/categoria' component={CategoryPage}/>
                    <Route path='/search' component={SearchPage}/>
                    <Route path='/profile' component={ProfilePage}/>
                    <Route path='/register' component={RegisterPage}/>
                </Switch>
            </main>
        );
    }
}
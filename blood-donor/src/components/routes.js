/**
 * Created by sb0103 on 15/9/17.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Header from '../components/header';
import Search from '../components/Search';
import Register from '../components/registrarionDonar';
import PostRequest from '../components/postRequest';
import Login from '../components/login';


const routes = (
    <Route>
        <Route path="/" component={ Header }>
            <IndexRoute component={ Login } ></IndexRoute>
            <Route path ="login" component={Login}></Route>
            <Route path ="search" component={Search}></Route>
            <Route path ="registerDonor" component={Register}></Route>
            <Route path ="postRequest" component={PostRequest}></Route>
        </Route>
    </Route>
);
export default routes

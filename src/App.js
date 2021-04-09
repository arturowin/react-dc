import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Redirect, Route, Switch,} from "react-router-dom";
import 'antd/dist/antd.css';
import './App.css';

import Nav from "./components/Nav"
import Home from "./components/Home"
import Routing from "./components/Routing"
import HocChild from "./components/HocChild";
import PrivateRoute from "./PrivateRoute";
import Hooks from "./components/Hooks";
import Context from "./components/Context";


// lazy loading
const Dashboard = lazy(() => import('./components/Dashboard'));


export default function App() {
    return (
        <Router>
            <Nav/>
            <Suspense fallback={<div>loading</div>}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/routing/:id" component={Routing}/>
                    <Route path="/hoc">
                        <HocChild something={"REACT IS AWESOME"}/>
                    </Route>
                    <Route path="/hooks" component={Hooks}/>
                    <Route path="/context" component={Context}/>
                    <PrivateRoute path="/dashboard" component={Dashboard}/>
                    <Redirect from='*' to='/' />
                </Switch>
            </Suspense>
        </Router>

    );
}

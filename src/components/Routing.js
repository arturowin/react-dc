import React from "react";
import {useHistory, useLocation, useParams, Link} from 'react-router-dom';
import { Layout } from 'antd';
import useAuth from "../hooks/useAuth";
import LoginForm from "./LoginForm";


const { Content } = Layout;


const Routing = () => {

    const useQuery = () => (new URLSearchParams(useLocation().search));

    const {isLoggedIn} = useAuth();

    const history = useHistory();
    const location = useLocation();
    const params = useParams();
    const query = useQuery();

    window.console.log("history", history);
    window.console.log("location", location);
    window.console.log("params", params);
    window.console.log("search", query.get('name'));

    return (
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">ROUTING <code>Routing.js</code>
                <br/><br/>
                <p><strong>HISTORY:</strong> <code>{JSON.stringify(history)}</code></p>
                <p><strong>LOCATION: </strong><code>{JSON.stringify(location)}</code></p>
                <p><strong>PARAMS: </strong><code>{JSON.stringify(params)}</code></p>
                <p><strong>QUERY: </strong><code>{query.get('name')}</code></p>
                {isLoggedIn ? <Link to="/dashboard">Dashboard</Link> : <LoginForm/>}
            </div>
        </Content>)
}

export default Routing;

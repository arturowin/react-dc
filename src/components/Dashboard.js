import {useHistory} from 'react-router-dom'
import { Button } from 'antd';
import useAuth from "../hooks/useAuth";
import logo from "../logo.svg";


function Dashboard() {

   const history = useHistory();

   const {logoutUser} = useAuth();

    const logout = () => {
        logoutUser();
        history.push('/');
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    WELCOME TO DASHBOARD
                    <br/>
                    <code>src/components/Dashboard.js</code>
                    <br/>

                    <Button onClick={logout} type="primary" block>
                        Logout
                    </Button>
                </p>
            </header>
        </div>
    );
}

export default Dashboard;

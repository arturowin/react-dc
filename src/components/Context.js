import {createContext, useState} from 'react';
import { Button } from 'antd';
import logo from "../logo.svg";
import ContextConsumer from "./ContextConsumer";

export const ThemeContext = createContext();

function Context() {

    const [darkTheme, setDarkTheme] = useState(true);

    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: darkTheme ? "#282c34" : "#bdcae2"}}>
                <img src={logo} className="App-logo" alt="logo" />
                <ThemeContext.Provider value={darkTheme}>
                    <ContextConsumer/>
                </ThemeContext.Provider>
                <Button onClick={() => setDarkTheme(prev => !prev)} type="primary" block>Change Theme</Button>
            </header>
        </div>
    );
}

export default Context;

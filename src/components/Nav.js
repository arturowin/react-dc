import React, {useState} from "react";
import {useHistory, useLocation} from 'react-router-dom'
import { Menu } from 'antd';


const MENU_ITEMS = [
    {location: '/', name: 'Home'},
    {location: '/hoc', name: 'HOC'},
    {location: '/routing/someId', name: 'Routing'},
    {location: '/hooks', name: 'Hooks'},
    {location: '/context', name: 'Context'},
]

function Nav () {
    const location = useLocation();
    const history = useHistory();


    const [selectedItem, setSelectedItem] = useState(location.pathname);
    const handleClick = e => {
        setSelectedItem(e.key);
        history.push(e.key);
    };
    return (
        <Menu onClick={handleClick} selectedKeys={selectedItem} mode="horizontal">
            {MENU_ITEMS.map((item) => (
                <Menu.Item key={item.location}>
                    {item.name}
                </Menu.Item>
            ))}
        </Menu>

    )
}

export default Nav;

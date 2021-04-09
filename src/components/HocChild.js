import React from "react";
import { Layout } from 'antd';
import HocWrapper from "./HocWrapper";


const { Content } = Layout;

const HocChild = ({something}) => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">THIS PART IS FROM <code>HocChild.js</code>
                <p>THIS IS A PROP THAT WE PASSED FROM <code>App.js</code>
                     --> <strong>{something}</strong>
                </p>
            </div>
        </Content>)
}

const WrappedComponent = HocWrapper(HocChild);

export default WrappedComponent;

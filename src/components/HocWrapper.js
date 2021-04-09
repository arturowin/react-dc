import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

const HocWrapper = (WrappedComponent) => (props) => {
    return (
        <Layout className="layout">
            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>THIS PART IS FROM <code>HocWrapper.js</code></Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    <WrappedComponent {...props}/>
                </div>
            </Content>
        </Layout>
    )
}
export default HocWrapper;

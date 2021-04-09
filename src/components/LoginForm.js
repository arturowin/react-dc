import { Form, Input, Button } from 'antd';
import useAuth from "../hooks/useAuth";
import {useHistory} from "react-router-dom";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const LoginForm = () => {

    const {authUser} = useAuth();
    const history = useHistory();

    const onFinish = (values) => {
        authUser(values.password);
        history.push("/dashboard");
    };

    return (
        <Form
            {...layout}
            name="login"
            onFinish={onFinish}
        >
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;

import React from "react";
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
// import router from 'umi/router';



class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const onChange = e => {
        console.log(e);
      };

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
          <Row  type="flex" direction="column" justify="center" align="middle" className="Group">
          <Col span={6}>
          <h2>登录</h2>
          <br/>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              size="large"
              allowClear onChange={onChange}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input.Password
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              size="large"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox className='login-form-remember'>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          </Form.Item>
          <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" size="large" >
            Log in
          </Button>
          </Form.Item>
          Or
         {/*  <Router>
           <Link to="/Register">register now!</Link>
           </Router> */}
        </Col> </Row>
      </Form>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);
export default Login;

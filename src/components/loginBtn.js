import React, { Component } from 'react'

import { Drawer, Form, Button, Col, Row, Input, Icon } from 'antd';


class loginBtn extends Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="link" onClick={this.showDrawer}>
          <Icon type="user" /> 立即登录
        </Button>
        <Drawer
          title="Login in"
          width={"60%"}
          onClose={this.onClose}
          visible={this.state.visible}
          // bodyStyle={{ paddingBottom: 80 }}
        >
          <Form layout="vertical" hideRequiredMark style={{ marginTop: 8 }}>
            <Row gutter={12}>
              <Col span={14} offset={5}>
                <Form.Item label="Name">
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please enter name!' }],
                  })(<Input placeholder="Please enter user name" size="large"/>)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={14} offset={5}>
                <Form.Item label="Password">
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please enter password!' }],
                  })(<Input placeholder="Please enter user password" size="large" />)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={10} offset={7}>
                <Form.Item>
                <Button  block onClick={this.onClose} type="primary"  size="large">
              Login in
            </Button>

                </Form.Item>
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={10} offset={7}>
                <Form.Item>
            <Button block onClick={this.onClose} size="large">
              Cancel
            </Button>
                </Form.Item>
              </Col>
            </Row>

          </Form>
        </Drawer>
      </div>
    );
  }
}


const Login = Form.create({ name: 'normal_login' })(loginBtn);
export default Login;





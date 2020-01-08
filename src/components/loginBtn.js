import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Icon, Checkbox } from 'antd';
import { connect } from 'dva';
import { setCookie, getCookie } from '../utils/authCK';

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}
class loginBtn extends Component {
  state = { visible: false };
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentDidMount() {
    //* To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.form.validateFields();
    this.props.form.validateFields((err, values) => {
      console.log(this.props);
      const { dispatch } = this.props;
      console.log('Received values of form: ', values);
      dispatch({
        type: 'login/login',
        payload: {
          name: values.userName,
          password: values.password,
        },
      });
      console.log(values.remember);
      if (values.remember === true) {
        setCookie(values.userName, values.password, 7);
        console.log('CK success');
      }
    });
  };

  handleSelectChange = e => {
    console.log(e.target.value, getCookie(e.target.value));
    if (getCookie(e.target.value)) {
      this.props.form.setFieldsValue({
        password: getCookie(e.target.value),
      });
    }
  };

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
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <div>
        <Button type="link" onClick={this.showDrawer}>
          <Icon type="user" /> 立即登录
        </Button>
        <Drawer title="Login in" width={'60%'} onClose={this.onClose} visible={this.state.visible}>
          <Form
            layout="vertical"
            hideRequiredMark
            style={{ marginTop: 8 }}
            onSubmit={this.handleSubmit}
          >
            <Row gutter={12}>
              <Col span={14} offset={5}>
                <Form.Item
                  label="Name"
                  validateStatus={userNameError ? 'error' : ''}
                  help={userNameError || ''}
                >
                  {getFieldDecorator('userName', {
                    rules: [
                      { required: true, message: 'Please enter name!' },
                      {
                        pattern: new RegExp(/^[\u4e00-\u9fa5]/g, ''),
                        message: 'User names must be in Chinese!',
                      },
                      {
                        min: 3,
                        max: 8,
                        message: 'The length is out of range!',
                      },
                      {
                        whitespace: true,
                        message: 'No Spaces are allowed!',
                      },
                    ],
                    initialValue: '',
                  })(
                    <Input
                      placeholder="Please enter user name"
                      size="large"
                      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      onChange={this.handleSelectChange.bind(this)}
                      allowClear={true}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={14} offset={5}>
                <Form.Item
                  label="Password"
                  validateStatus={passwordError ? 'error' : ''}
                  help={passwordError || ''}
                >
                  {getFieldDecorator('password', {
                    rules: [
                      { required: true, message: 'Please enter password!' },
                      {
                        whitespace: true,
                        message: 'No Spaces are allowed!',
                      },
                    ],
                    initialValue: '',
                  })(
                    <Input
                      placeholder="Please enter user password"
                      size="large"
                      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      type="password"
                      allowClear={true}
                    />,
                  )}
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={12}>
              <Col span={10} offset={10}>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                    getValueFromEvent(e) {
                      console.log(e);
                      return e.target.checked;
                    },
                  })(<Checkbox>记住密码</Checkbox>)}
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={12}>
              <Col span={10} offset={7}>
                <Form.Item>
                  <Button
                    block
                    onClick={this.onClose}
                    type="primary"
                    size="large"
                    htmlType="submit"
                    disabled={hasErrors(getFieldsError())}
                  >
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

const mapStateToProps = state => state.login;
export default connect(mapStateToProps)(Login);

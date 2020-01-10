import React from 'react';
import { Form, Select, InputNumber, Input, Button, Upload, Icon, AutoComplete, } from 'antd';

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class edit extends React.Component {

  state = {
    autoCompleteResult: [],
  };

  handleProNameChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };



  render() {
    const { autoCompleteResult } = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 11 },
    };

    const proNameOptions = autoCompleteResult.map(proName => (
      <AutoCompleteOption key={proName}>{proName}</AutoCompleteOption>
    ));

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} hideRequiredMark>
        <h3 style={{ marginLeft: '10%' }}>修改商品信息：</h3>

        <Form.Item label="商品名">
          {getFieldDecorator('proName', {
            rules: [{ required: true, message: 'Please input product name!' }],
          })(
            <AutoComplete
              dataSource={proNameOptions}
              onChange={this.handleProNameChange}
              placeholder="Please input product name"
            >
              <Input />
            </AutoComplete>,
          )}
        </Form.Item>

        <Form.Item label="分类">
          {getFieldDecorator('select-multiple', {
            rules: [{ required: true, message: 'Please select category!' }, { type: 'array' }],
          })(
            <Select mode="multiple" placeholder="Please select category">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="数量">
          {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber />)}
          <span className="ant-form-text"></span>
        </Form.Item>

        <Form.Item label="上传图片" extra="">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> 上传图片
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
          <Button type="primary" htmlType="submit" size="large">
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const editor = Form.create({ name: 'validate_other' })(edit);

//  const mapStateToProps = state => state.edit;
// export default connect(mapStateToProps)(edit);
export default editor;

import React from 'react';
import { Form, Select, InputNumber, Input, Button, Upload, Icon } from 'antd';
import { connect } from 'dva';
import router from 'umi/router'

class add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      name: '',
      OriginPrice: '',
      upload: '',
      imgUrl: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'adde/category',
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({
          type: 'adde/addData',
          payload: {
          title: values.title,
              name: values.name,
              imgUrlall: [],
              OriginPrice: values.OriginPrice,
              sizeAll: [1,2,3],
              imgUrl: this.state.imgUrl,
              Numb: '123',
              Num1:'123',
              Num2:'123',
              Num3:'123'
          },
        });
      }
    });
    router.replace('/products')
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }

    return e.file && e.fileList;
  };



  uploadHandle = e => {
    // console.log(e);

    if (e.file.status === 'done') {
      console.log(e.file.response.file);
      this.setState({
        imgUrl: 'http://192.168.0.108:1314' + e.file.response.file,
      });
     console.log(this.state.imgUrl)
    }


  };


  render() {
    const { getFieldDecorator } = this.props.form;
    const { menu } = this.props;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 11 },
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} hideRequiredMark>
        <h2 style={{ marginLeft: '10%' }}>添加商品：</h2>
        <br />

        <Form.Item label="商品名">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '必填' }],
          })(<Input />)}
        </Form.Item>
        <br />
        <Form.Item label="种类" hasFeedback>
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '必选' }],
          })(
            <Select placeholder="Please select a category" onFocus={this.getMenu}>
              {menu.map(item => (
                <Select.Option key={item._id} value={item.name}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>,
          )}
        </Form.Item>
        <br />
        <Form.Item label="价格">
          {getFieldDecorator('OriginPrice', { initialValue: 3 })(<InputNumber />)}
          <span className="ant-form-text"></span>
        </Form.Item>
        <br />
        <Form.Item label="上传图片" extra="">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload
              name="logo"
              onChange={this.uploadHandle.bind(this)}
               // eslint-disable-next-line
              name="avatar"
              action="http://192.168.0.108:1314/upload"
              listType="picture"
            >
              <Button>
                <Icon type="upload" /> 上传图片
              </Button>
            </Upload>,
          )}
        </Form.Item>
        <br />
        <Form.Item wrapperCol={{ span: 12, offset: 10 }}>
          <Button type="primary" htmlType="submit" size="large">
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const adde = Form.create({ name: 'validate_other' })(add);

const mapStateToProps = state => state.adde;
export default connect(mapStateToProps)(adde);

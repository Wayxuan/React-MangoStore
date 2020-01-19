import React from 'react';
import { Form, Select, InputNumber, Input, Button, Upload, Icon } from 'antd';
import { connect } from 'dva';
import router from 'umi/router'

class edit extends React.Component {
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
    // 挂载完成的this.props里面的location的search属性就有啦
    console.log('传来的props', this.props);
    const searchParams = new URLSearchParams(this.props.location.search);
    const id = searchParams.get('id');
    this.props.dispatch({
      type: 'editor/detail',
      payload: { id },
    });
    this.props.dispatch({
      type: 'editor/category',
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props);
        console.log(this.state.imgUrl);
        this.props.dispatch({
          type: 'editor/change',
          payload: {
            id: this.props.product.data._id,
            title: values.title,
            name: values.name,
            imgUrlall: this.props.product.data.imgUrlall,
            OriginPrice: values.OriginPrice,
            Num: this.props.product.data.Num,
            Num1: this.props.product.data.Num1,
            Num2: this.props.product.data.Num2,
            Num3: this.props.product.data.Num3,
            sizeAll: this.props.product.data.sizeAll,
            imgUrl: this.state.imgUrl,
            Numb: this.props.product.data.Numb,
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

  getTitle = e => {
    console.log('详情后的', this.props);
    const { product } = this.props;
    this.props.form.setFieldsValue({
      title: product.data.title,
    })
  };
  getMenu = e => {
    console.log('详情后的', this.props);
  };

  uploadHandle = e => {
    console.log(e);
    if (e.file.status === 'done') {
      console.log(e.file.response.file);
      this.setState({
        imgUrl: 'http://192.168.0.108:1314' + e.file.response.file,
      });
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
        <h2 style={{ marginLeft: '10%' }}>修改商品信息：</h2>
        <br />

        <Form.Item label="商品名">
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '必填' }],
          })(<Input onFocus={this.getTitle} />)}
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

const editor = Form.create({ name: 'validate_other' })(edit);

const mapStateToProps = state => state.editor;
export default connect(mapStateToProps)(editor);

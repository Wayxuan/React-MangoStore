import React, { Component } from 'react';
import { Table, Button, Popconfirm, message } from 'antd';
import '../styles/product.css';
import { connect } from 'dva';
import { isLogined } from '../utils/authLocal';
import router from 'umi/router';

class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imgUrl: '',
      OriginPrice: '',
      name: '',
      products: [],
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'products/loadData',
      payload: {},
    });
  }

  render() {
    const { products, loading, dispatch } = this.props;

    function onDelete(e) {
      console.log(e);
      if (isLogined()) {
        console.log(e);
        dispatch({
          type: 'products/delete',
          payload: {
            id: e,
          },
        });
        message.success('删除成功');
      }else{
        message.warning("请管理员先登录")
      }
    }

    function onClick(e) {
      console.log(e);
      if (isLogined()) {
        // 点击跳转页面并把id传过去
        router.replace('/editor?id='+e);
      }else{
        message.warning("请管理员先登录")
      }
    }

    const columns = [
      {
        title: '商品名',
        dataIndex: 'title',
        align: 'center',
        width: '20%',
        ellipsis: true,
      },
      {
        title: '商品图',
        dataIndex: 'imgUrl',
        align: 'center',
        width: '20%',
        render: record => <img src={record} width="100%" alt="" />,
      },
      {
        title: '价格',
        dataIndex: 'OriginPrice',
        align: 'center',
        width: '20%',
      },
      {
        title: '类别',
        dataIndex: 'name',
        align: 'center',
        width: '20%',
      },
      {
        title: '操作',
        align: 'center',
        ellipsis: true,
        render: (text, record) => {
          return (
            <div>
              <span>
                <Popconfirm title="Edit?" onConfirm={() => onClick(record._id)}>
                  <Button
                    type="primary"
                    style={{ width: '35%', textAlign: 'center' }}
                    icon="edit"
                  ></Button>
                </Popconfirm>
                {/* 点击路由跳转，参数传递 */}
              </span>
              <span> </span>
              <span>
                <Popconfirm title="Delete?" onConfirm={() => onDelete(record._id)}>
                  <Button type="danger" style={{ width: '35%', textAlign: 'center' }} icon="delete"></Button>
                </Popconfirm>
              </span>
            </div>
          );
        },
      },
    ];

    return (
      <div>
        <Table
          columns={columns}
          dataSource={products}
          rowKey={record => record._id}
          loading={loading}
          bordered
        />
        ,
      </div>
    );
  }
}

const mapStateToProps = state => state.products;
export default connect(mapStateToProps)(products);

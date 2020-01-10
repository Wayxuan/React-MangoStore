import React, { Component } from 'react';
import { Table } from 'antd';
import '../styles/product.css';
import { connect } from 'dva';


class users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tel: '',
      address: '',
      createdAt: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'users/loadData',
      payload: {},
    });
  }

  render() {
    const { products,loading } = this.props;

    const columns = [
      {
        title: '用户名',
        dataIndex: 'name',
        align: 'center',
        width: "20%",
        ellipsis: true,
      },
      {
        title: '电话号码',
        dataIndex: 'tel',
        align: 'center',
        width: "30%",
      },
      {
        title: '地址',
        dataIndex: 'address',
        align: 'center',
        width: "20%",
      },
      {
        title: '注册时间',
        dataIndex: 'createdAt',
        align: 'center',
        width: "20%",
      }
    ];
    return (

      <div>
        <Table columns={columns} dataSource={products} rowKey={record => record._id} loading={loading} bordered />,
      </div>
    );
  }
}

const mapStateToProps = state => state.users;
export default connect(mapStateToProps)(users);

import React, { Component } from 'react';
import { Table } from 'antd';
import '../styles/product.css';
import { connect } from 'dva';


class Borders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productTitle: '',
      productImg: '',
      productPrice: '',
      productSize: '',
      productNum:''
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'Borders/loadData',
      payload: {},
    });
  }

  render() {
    const { products , loading} = this.props;
    const columns = [
      {
        title: '商品名',
        dataIndex: 'productTitle',
        align: 'center',
        width: "20%",
        ellipsis: true,
      },
      {
        title: '商品图',
        dataIndex: 'productImg',
        align: 'center',
        width: "20%",
        render: record => <img src={record} width="100%" alt="" />,
      },
      {
        title: '价格',
        dataIndex: 'productPrice',
        align: 'center',
        width: "20%",
      },
      {
        title: '尺寸',
        dataIndex: 'productSize',
        align: 'center',
        width: "20%",
      },
      {
        title: '数量',
        dataIndex: 'productNum',
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

const mapStateToProps = state => state.Borders;
export default connect(mapStateToProps)(Borders);

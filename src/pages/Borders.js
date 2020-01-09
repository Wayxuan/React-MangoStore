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
    console.log(this.props.products);

    const { products } = this.props;

    const columns = [
      {
        title: '商品名',
        dataIndex: 'productTitle',
        align: 'center',
        width: 200,
        ellipsis: true,
      },
      {
        title: '商品图',
        dataIndex: 'productImg',
        align: 'center',
        render: record => <img src={record} width="100px" alt="" />,
      },
      {
        title: '价格',
        dataIndex: 'productPrice',
        align: 'center',
        width: 200,
      },
      {
        title: '尺寸',
        dataIndex: 'productSize',
        align: 'center',
        width: 200,
      },
      {
        title: '数量',
        dataIndex: 'productNum',
        align: 'center',
        width: 200,
      }
    ];

    return (
      <div>
        <Table columns={columns} dataSource={products} rowKey={record => record._id} bordered />,
      </div>
    );
  }
}

const mapStateToProps = state => state.Borders;
export default connect(mapStateToProps)(Borders);

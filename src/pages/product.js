import React, { Component } from 'react';
import { Table } from 'antd';
import '../styles/product.css';
import { connect } from 'dva';


class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imgUrl: '',
      OriginPrice: '',
      name: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'product/loadData',
      payload: {},
    });
  }

  render() {
    console.log(this.props.products);

    const { products } = this.props;

    const columns = [
      {
        title: '商品名',
        dataIndex: 'title',
        align: 'center',
        width: 200,
        ellipsis: true,
      },
      {
        title: '商品图',
        dataIndex: 'imgUrl',
        align: 'center',
        render: record => <img src={record} width="100px" alt="" />,
      },
      {
        title: '价格',
        dataIndex: 'OriginPrice',
        align: 'center',
        width: 200,
      },
      {
        title: '类别',
        dataIndex: 'name',
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

const mapStateToProps = state => state.product;
export default connect(mapStateToProps)(product);

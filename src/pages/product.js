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
      name: ''
  };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'product/loadData',
      payload: {},
    });
  }


  render() {
    const { products ,loading} = this.props;
    const columns = [
      {
        title: '商品名',
        dataIndex: 'title',
        align: 'center',
        width: "20%",
        ellipsis: true,
      },
      {
        title: '商品图',
        dataIndex: 'imgUrl',
        align: 'center',
        width: "20%",
        render: record => <img src={record} width="100%" alt="" />,
      },
      {
        title: '价格',
        dataIndex: 'OriginPrice',
        align: 'center',
        width: "20%",
      },
      {
        title: '类别',
        dataIndex: 'name',
        align: 'center',
        width: "20%",
      }
    ];
    return (
      <div>
        <Table columns={columns} dataSource={products} rowKey={record => record._id}  loading={loading} bordered />,
      </div>
    );
  }
}

const mapStateToProps = state => state.product;
export default connect(mapStateToProps)(product);


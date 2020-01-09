import React, { Component } from 'react';
import { Table, Button } from 'antd';
import '../styles/product.css';
import { connect } from 'dva';


class products extends Component {
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
      },
      {
        title: '操作',
        align: 'center',
        render: (text, record) => {
          return (
            <div>
              <span>
                <Button type="primary">编辑</Button>
              </span>
              <span> </span>
              <span>
                <Button type="danger">删除</Button>
              </span>
            </div>
          );
        },
      },
    ];

    return (
      <div>
        <Table columns={columns} dataSource={products} rowKey={record => record._id} bordered />,
      </div>
    );
  }
}

const mapStateToProps = state => state.product;
export default connect(mapStateToProps)(products);

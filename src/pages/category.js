import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Button } from 'antd';

class category extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ''};
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'category/loadData',
      paload: {},
    });
  }

  render() {
    const { category } = this.props;
    const columns = [
      {
        title: '类别',
        dataIndex: 'name',
        align: 'center',
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
            </div>
          );
        },
      },
    ];

    return (
      <div>
        <Table columns={columns} dataSource={category} rowKey={record => record._id} bordered />,
      </div>
    );
  }
}

const mapStateToProps = state => state.category;
export default connect(mapStateToProps)(category);



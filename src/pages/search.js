import React from 'react';
import { AutoComplete, Button, Input, Icon, Card } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';


const { Meta } = Card;
class test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      dataSource: [],
      proInfo: [],
      flag: true,
    };
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'search/loadData',
      payload: {
        products: [],
      },
    });
  }

  onSelect = value => {
    this.props.products.forEach(item => {
      if (item.title.indexOf(value) > -1) {
        this.setState({
          proInfo: [item],
          flag: false,
        });
      }
    });
  };

  onSearch = searchText => {
    const result = [];

    this.props.products.forEach(item => {
      if (searchText) {
        if (item.title.indexOf(searchText) > -1) {
          return result.push(item);
        }
      }
    });
    let data = [];
    result.map(item => {
      return data.push(item.title);
    });

    this.setState({
      dataSource: !searchText ? [] : data,
      searchData: result,
      flag: true,
    });
  };


  zoom = () => {
    this.setState(
      {
        proInfo: this.state.searchData,
        flag: false,
      },

    );
  };

  onClickHandle=(e)=>{
   console.log(e.currentTarget.getAttribute('data-id'))
   let id=e.currentTarget.getAttribute('data-id')
   router.replace('/editor?id='+id)
}

  //* 现在只需要回车的时候 把 输入框中对应的 datasource的数据都调出来就行
  /**
   * onSelect 回车只能选中一个，但是当下的datasource异步还是上一次的十几个结果
   * 可能需要onChange，但是onChange调用不动
   * 自己添加点击事件也没反应
   * 莫非用到生命周期ComponentdidUpdata
   * 或者这个datasource应该直接在redux里过滤出来，这边只接受展示列表和信息0.0
   * */

  render() {
    console.log(this.props);
    // const {products} = this.props
    // console.log(products)

    const { dataSource, proInfo } = this.state;
    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          size="large"
          style={{ width: '40%', marginLeft: '27%' }}
          onSelect={this.onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
          open={this.state.flag}
          getPopupContainer={() => document.getElementById('area')}
        >
          <Input
            size="large"
            onChange={this.onChange}
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12 }}
                size="large"
                type="primary"
                id="area"
                onClick={this.zoom}
              >
                <Icon type="search"/>
              </Button>
            }
          />
        </AutoComplete>

        {proInfo.map(item => {
          return (
            <Card
              hoverable
              style={{
                width: '90%',
                height: '30%',
                marginTop: '5%',
                marginLeft: '5%',
                display: 'flex',
                justifyContent: 'space-around',
                textAlign:"center"
              }}
              cover={<img alt="example" src={item.imgUrl} style={{ width: '100px',height:"100%",marginLeft:"2px"}} />}
              key={item._id}
              actions={[
                <div style={{ display: 'flex', textAlign: 'left', width: '100%' }}>
                  <Icon type="edit" key="edit" style={{ fontSize: '30px', marginTop: '45%' }}  data-id={item._id} onClick={this.onClickHandle}/>
                </div>,
              ]}
            >
              <Meta
                title={item.title}
                description={'剩余数量：' + item.Num + '   ，现价：' + item.OriginPrice}
              />
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => state.search;
export default connect(mapStateToProps)(test);

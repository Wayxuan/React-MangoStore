import React from 'react';
import { AutoComplete, Button, Input, Icon, Card, message } from 'antd';
import { connect } from 'dva';
import router from 'umi/router';
import { isLogined } from '../utils/authLocal';



const { Meta } = Card;
class search extends React.Component {
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
   if (isLogined()) {
    // 点击跳转页面并把id传过去
    let id=e.currentTarget.getAttribute('data-id')
    router.replace('/editor?id='+id)
  }else{
    message.warning("请管理员先登录")
  }

}


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
              cover={<img alt="example" src={item.imgUrl} style={{ width: '100px',height:"100%",marginLeft:"1px"}} />}
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
export default connect(mapStateToProps)(search);

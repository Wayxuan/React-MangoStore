import React from 'react'
import { AutoComplete,Button,Input,Icon } from 'antd';
import { connect } from 'dva';

function onSelect(value) {
  console.log('onSelect', value);
}

class test extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value: '',
      dataSource: [],
    }
  }

  componentDidMount() {
    this.props.dispatch({
      type:"search/loadData",
      payload:{
        products:[]
      }
    })
  }

  onSearch = searchText => {
    const result=[]

    this.props.products.forEach((item)=>{
      if(searchText){
        if(item.title.indexOf(searchText)>-1){
           return result.push(item)
        }
      }
    })
    let data=[]
    result.map((item)=>{
     return data.push(item.title)
    })

  this.setState({
    dataSource: !searchText ? [] : data,
    searchData:result
  });
};

  onChange = value => {
    console.log(value)
    this.setState({ value });
  };

  render() {
    console.log(this.props)
    // const {products} = this.props
    // console.log(products)

    const { dataSource } = this.state;
    return (
      <div>
        <AutoComplete
          dataSource={dataSource}
          size="large"
          style={{ width: '40%',marginLeft:250 }}
          onSelect={onSelect}
          onSearch={this.onSearch}
          placeholder="input here"
        >
          <Input size="large"
            suffix={
              <Button
                className="search-btn"
                style={{ marginRight: -12}}
                size="large"
                type="primary"
              >
                <Icon type="search" />
              </Button>
            }
          />
        </AutoComplete>
      </div>
    );
  }
}


const mapStateToProps = state => state.search;
export default connect(mapStateToProps)(test);

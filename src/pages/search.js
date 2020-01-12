import React from 'react'
import { Icon, Button, Input, AutoComplete } from 'antd';

const { Option } = AutoComplete;

function onSelect(value) {
  console.log('onSelect', value);
}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join('.')
    .split('.')
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} text={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          {item.query}
          <a
            href={`https://www.yougou.com/ssc/suggest.sc?term=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.Numb}
          </a>
        </span>
        <span className="global-search-item-count">{item.title} results</span>
      </div>
    </Option>
  );
}
class search extends React.Component {
  state = {
    dataSource: [],
  };

  handleSearch = value => {
    this.setState({
      dataSource: value ? searchResult(value) : [],
    });
  };

  render() {
    const { dataSource } = this.state;
    return (
      <div className="global-search-wrapper" style={{ width: "40%" }}>
        <AutoComplete
          className="global-search"
          size="large"
          style={{ width: '100%' }}
          dataSource={dataSource.map(renderOption)}
          onSelect={onSelect}
          onSearch={this.handleSearch}
          placeholder="input here"
          optionLabelProp="text"
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

export default search


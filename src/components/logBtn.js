import { Menu, Dropdown, Button, Icon } from 'antd';
import React from 'react';
import Loginbtn from '../components/loginBtn';

function logBtn() {
  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Icon type="user" />
        当前在线
      </Menu.Item>
      <Menu.Item key="2">
        <Loginbtn></Loginbtn>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        退出登录
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button type="primary">
          Admin <Icon type="down" />
        </Button>
      </Dropdown>
    </div>
  );
}

export default logBtn;

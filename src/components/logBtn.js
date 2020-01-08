import { Menu, Dropdown, Button, Icon } from 'antd';
import React from 'react';
import Loginbtn from '../components/loginBtn';
import styles from '../layouts/index.css';

function logBtn() {
  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    console.log('click', e);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Loginbtn></Loginbtn>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="link">
          <Icon type="user" />
          退出登录
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={menu}>
        <Button type="primary" className={styles.btn}>
          <div className={styles.fontBox}>
            <span>Admin</span>
            <Icon type="down" />
          </div>
        </Button>
      </Dropdown>
    </div>
  );
}

export default logBtn;

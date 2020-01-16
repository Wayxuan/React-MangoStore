import { Menu, Dropdown, Button, Icon, message } from 'antd';
import React from 'react';
import Loginbtn from '../components/loginBtn';
import styles from '../layouts/index.css';
import { logOut } from '../utils/authLocal';
import router from 'umi/router';

function logBtn() {
  function handleMenuClick(e) {
    // message.info('Click on menu item.');
    console.log('click', e);
  }
  const exit = () => {
    logOut();
    message.success('退出成功');
    router.replace('/');
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Loginbtn></Loginbtn>
      </Menu.Item>
      <Menu.Item key="2">
        <Button type="link" onClick={() => exit()}>
          <Icon type="user" />
          退出登录
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
    <Dropdown overlay={menu} subMenuCloseDelay={10}
    getPopupContainer={triggerNode => triggerNode.parentElement}>
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

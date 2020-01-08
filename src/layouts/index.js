import styles from './index.css';
import { Layout, Menu, Icon } from 'antd';
import router from 'umi/router';
import LogBtn from '../components/logBtn';

function BasicLayout(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.logo}>
          <img src={require('../assets/logo.png')} alt="logo" width="200%" height="110%" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item
            key="1"
            onClick={() => {
              router.replace('/');
            }}
          >
            nav 1
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => {
              router.replace('/product');
            }}
          >
            nav 2
          </Menu.Item>
          <Menu.Item
            key="3"
            onClick={() => {
              router.replace('/mine');
            }}
          >
            nav 3
          </Menu.Item>
        </Menu>
        <div className={styles.btnBox}>
          <LogBtn></LogBtn>
        </div>
      </Header>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          theme="light"
          width={250}
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item
              key="1"
              onClick={() => {
                router.replace('/');
              }}
            >
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                router.replace('/product');
              }}
            >
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                router.replace('/mine');
              }}
            >
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item
                key="5"
                onClick={() => {
                  router.replace('/product');
                }}
              >
                Option 5
              </Menu.Item>
              <Menu.Item
                key="6"
                onClick={() => {
                  router.replace('/mine');
                }}
              >
                Option 6
              </Menu.Item>
              <Menu.Item
                key="7"
                onClick={() => {
                  router.replace('/');
                }}
              >
                Option 7
              </Menu.Item>
              <Menu.Item
                key="8"
                onClick={() => {
                  router.replace('/product');
                }}
              >
                Option 8
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item
                key="9"
                onClick={() => {
                  router.replace('/');
                }}
              >
                Option 9
              </Menu.Item>
              <Menu.Item
                key="10"
                onClick={() => {
                  router.replace('/mine');
                }}
              >
                Option 10
              </Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item
                  key="11"
                  onClick={() => {
                    router.replace('/product');
                  }}
                >
                  Option 11
                </Menu.Item>
                <Menu.Item
                  key="12"
                  onClick={() => {
                    router.replace('/mine');
                  }}
                >
                  Option 12
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>MangoStore ©2018 Created by Wayxuan</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;

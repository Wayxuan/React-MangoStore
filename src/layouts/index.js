import styles from './index.css';
import { Layout, Menu, Icon,message } from 'antd';
import router from 'umi/router';
import LogBtn from '../components/logBtn';
import { isLogined } from '../utils/authLocal';


function BasicLayout(props) {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  return (
    <div>
    <Layout>
      <Header className={styles.header} style={{ position: 'fixed', zIndex:2, width: '100%' }}>
        <div className={styles.logo}>
          <img src={require('../assets/logo.png')} alt="logo" width="200%" height="110%" />
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        ></Menu>
        <div className={styles.btnBox}>
          <LogBtn></LogBtn>
        </div>
      </Header>
      <Layout>
        <Sider
        style={{
          overflow: 'auto',
          height: '88.8vh',
          position: 'fixed',
          left: 0,
          marginTop:64
        }}
          theme="light"
          width={250}
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
              <span>首页</span>
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                if (isLogined()) {
                  router.replace('/product');
                }else{
                      message.warning("请管理员先登录")
                    }
              }}
            >
              <Icon type="desktop" />
              <span>商品列表</span>
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                if (isLogined()) {
                  router.replace('/users');
                }else{
                      message.warning("请管理员先登录")
                    }
              }}
            >
              <Icon type="user" />
              <span>用户列表</span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="inbox" />
                  <span>商品操作</span>
                </span>
              }
            >
              <Menu.Item
                key="5"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/search');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                商品查询
              </Menu.Item>
              <Menu.Item
                key="6"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/products');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                商品管理
              </Menu.Item>
              <Menu.Item
                key="7"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/add');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                商品入库
              </Menu.Item>
              <Menu.Item
                key="8"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/category');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                分类管理
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>订单操作</span>
                </span>
              }
            >
              <Menu.Item
                key="9"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/orders');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                全部订单
              </Menu.Item>
              <Menu.Item
                key="10"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/Aorders');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                已销售订单
              </Menu.Item>
              <Menu.Item
                key="11"
                onClick={() => {
                  if (isLogined()) {
                    router.replace('/Borders');
                  }else{
                        message.warning("请管理员先登录")
                      }
                }}
              >
                 未付款订单
              </Menu.Item>
              <SubMenu key="sub3" title="业绩分析">
                <Menu.Item
                  key="12"
                  onClick={() => {
                    if (isLogined()) {
                      router.replace('/test');
                    }else{
                          message.warning("请管理员先登录")
                        }
                  }}
                >
                  商品销售分析
                </Menu.Item>
                <Menu.Item
                  key="13"
                  onClick={() => {
                    if (isLogined()) {
                      router.replace('/mine');
                    }else{
                          message.warning("请管理员先登录")
                        }
                  }}
                >
                  生成分析报告
                </Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 250,marginTop:65}}>
          <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>{props.children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>MangoStore ©2018 Created by Wayxuan</Footer>
        </Layout>
      </Layout>
    </Layout>
    </div>
  );
}

export default BasicLayout;

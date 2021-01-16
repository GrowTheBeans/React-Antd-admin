import React, {Fragment} from 'react';
import { Menu, Layout, Icon } from 'antd';
import './nav_left.less';
import logo from '../../images/logo.svg';
import MenuConfig from '../../config/menuConfig.js';
const { SubMenu } = Menu;
const { Sider } = Layout;

class NavLeft extends React.Component {
  constructor(props) {
    super(props)
    const menuTreeNode = this.MenucList(MenuConfig);
    this.setState = ({
      menuTreeNode
    })
  }
  MenucList = data => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <Fragment>
                {item.icon ? <Icon type={item.icon} /> : null}
                <span>{item.title}</span>
              </Fragment>
            }>
            {this.MenucList(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        {item.icon ? <Icon type={item.icon} /> : null}
        <span>{item.title}</span>
      </Menu.Item>
    })
  }
  render() {
    return (
      <Layout>
        <Sider width={240} style={{ minHeight: '100vh' }}>
          <div className="nav_left_containers">
            <div className="logo">
              <img width={40} height={40} src={logo} alt="logo" />
              <h1>Imooc MS</h1>
            </div>
            <Menu mode="inline" theme="dark" className="nav_left_menu">
              {this.setState.menuTreeNode}
            </Menu>
          </div>
        </Sider>
      </Layout>
    )
  }
}

export default NavLeft;

import React from 'react';
import { Menu, Layout } from 'antd';
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
            title={item.title}
          >
            {this.MenucList(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>{item.title}</Menu.Item>
    })
  }
  render() {
    return (
      <Sider>
        <div className="nav_left_containers">
          <div className="logo">
            <img width={60} height={60} src={logo} alt="logo" />
            <h1>Imooc MS</h1>
          </div>
          <Menu mode="inline" theme="dark" className="nav_left_menu" style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}>
            {this.setState.menuTreeNode}
          </Menu>
        </div>
      </Sider>
    )
  }
}

export default NavLeft;

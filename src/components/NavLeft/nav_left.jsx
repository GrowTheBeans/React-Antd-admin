import React from 'react';
import { Menu } from 'antd';
import './nav_left.less';
import logo from '../../images/logo.svg';
import MenuConfig from '../../config/menuConfig.js';
const { SubMenu } = Menu;

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
      <div className="nav_left">
        <div className="logo">
          <img width={60} height={60} src={logo} alt="logo" />
          <h1>Imooc MS</h1>
        </div>
        <Menu mode="inline" theme="dark">
          {this.setState.menuTreeNode}
        </Menu>
      </div>
    )
  }
}

export default NavLeft;

import React, { Component } from 'react'
import { Menu, Dropdown, Avatar, Icon } from 'antd';
import styles from './index.module.less';

class HeaderRight extends Component {
  render() {
    const menu = (
      <Menu className={styles.menu}>
        <Menu.Item>
          <Icon type="user" />个人中心
        </Menu.Item>
        <Menu.Item>
          <Icon type="setting" />设置
        </Menu.Item>
        <Menu.Item>
          <Icon type="close-circle" />触发报错
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item>
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={styles.right}>
        <Dropdown overlay={menu}>
          <span className={styles.menu}>
            <Avatar size="small" icon="user" alt="avatar" />
          </span>
        </Dropdown>
      </div>
    )
  }
}

export default HeaderRight;

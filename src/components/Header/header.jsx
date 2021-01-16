import React from 'react';
import { Row, Col, Icon, Menu, Dropdown } from 'antd';
import './header.less';
import { FormateDate } from '../../Utils/utils.js';
import IconFont from '../../images/iconFont.js';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: '粽子',
      collapsed: false
    })
    setInterval(() => {
      const styTime = FormateDate(new Date());
      this.setState({
        styTime
      })
    }, 1000)
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="/" onClick={e => e.preventDefault()}>
            个人中心
          </a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="1">
          退出页面
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="Header">
        <Row className="Header-top">
          <Col span={2} className="icon-title">
            <Icon
              style={{ fontSize: '20px' }}
              onClick={this.toggle}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            />
          </Col>
          <Col span={22}>
            <span className="name">欢迎,{this.state.name}</span>
            <Dropdown overlay={menu}>
              <IconFont type="icon-gerendingzhi" style={{ fontSize: '20px' }}  />
            </Dropdown>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.styTime}</span>
            <IconFont type="icon-xue" style={{ fontSize: '18px' }}  />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Icon } from 'antd';
import './header.less';
import { FormateDate } from '../../Utils/utils.js';

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
            <span>欢迎,{this.state.name}</span>
            <Link to='/login'>退出</Link>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.styTime}</span>
            <span>请转多云</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Header;

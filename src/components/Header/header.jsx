import React from 'react';
import { Row, Col } from 'antd';
import './header.less';
import {FormateDate} from '../../Utils/utils.js';
console.log();

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      name: '粽子'
    })
    setInterval(() => {
      const styTime = FormateDate(new Date());
      this.setState({
        styTime
      })
    }, 1000)
  }
  render() {
    return (
      <div className="Header">
        <Row className="Header-top">
          <Col span={24}>
            <span>欢迎,{this.state.name}</span>
            <a href="/">退出</a>
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

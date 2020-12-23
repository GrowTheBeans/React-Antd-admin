import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/footer.jsx';
import NavLeft from '../../components/NavLeft/nav_left.jsx';
import Home from '../home/home.jsx';
import './admin.less';

class admin extends Component {
  render() {
    return (
      <div className="admin_container">
        <Row>
          <Col span={3}>
            <NavLeft className="admin_nav_left"/>
          </Col>
          <Col span={21} className="admin_main_right">
            <Header className="main_header"/>
            <Row className="content">
              <Home/>
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}
export default admin;

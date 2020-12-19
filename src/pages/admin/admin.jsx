import React, { Component } from 'react';
import Header from '../../components/Header/header.jsx';
import Footer from '../../components/Footer/footer.jsx';
import NavLeft from '../../components/NavLeft/nav_left.jsx';
import { Row, Col } from 'antd';
import './admin.less';

class admin extends Component {
  render() {
    return (
      <div className="admin_container">
        <Row>
          <Col span={3} className="nav_left">
            <NavLeft />
          </Col>
          <Col span={21} className="main">
            <Header />
            <Row className="content">
              {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </div>
    )
  }
}
export default admin;

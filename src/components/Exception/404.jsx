import React, { Component } from 'react';
import { Result, Button, Icon } from 'antd';

class Exception404 extends Component {
  OnException = () => {
    this.props.history.push('/')
  }
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉，你访问的页面不存在."
        extra={<Button type="primary" onClick={this.OnException}><Icon type="left-circle" />退出首页</Button>}
      />
    )
  }
}
export default Exception404;

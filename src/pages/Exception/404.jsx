import React, { Component } from 'react'
import { Result, Button, Icon } from 'antd';
import './index.less';

export default class Exception404 extends Component {
  onBtnPrim = (props) => {
    console.log(props);
  }
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={this.onBtnPrim}><Icon type="left-circle" />返回首页</Button>}
      />
    )
  }
}

import React, { Component } from 'react'
import { Result, Button } from 'antd';

export default class Exception404 extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary">返回首页</Button>}
      />
    )
  }
}

import React, { Component, Fragment } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import styles from './index.module.less';
import logo from '../../images/logo.svg';

class UserLogin extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div className={styles.header}>
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Ant Design</span>
            </div>
            <div className={styles.desc}>React框架 Ant Design 后台管理 Web 设计规范</div>
          </div>
          <Form onSubmit={this.handleSubmit} className={styles.main}>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="输入用户名"
              />
            </Form.Item>
            <Form.Item>
              <Input
                size="large"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="输入密码"
              />
            </Form.Item>
            <Form.Item>
              <Button size="large" type="primary" htmlType="submit" className={styles.submit}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
        <Fragment>
          <div style={{ overflow: 'hidden', textAlign: 'center', marginBottom: '10px' }}>
            <div>Copyright <Icon type="copyright" /> 2020 粽子出品</div>
          </div>
        </Fragment>
      </div>
    )
  }
}

export default UserLogin;


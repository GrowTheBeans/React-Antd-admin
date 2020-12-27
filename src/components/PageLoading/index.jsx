import React from 'react';
import { Spin } from 'antd';

function Loading() {
  return (
    <div style={{ paddingTop: 100, textAlign: 'center' }}>
      <Spin size="large" />
    </div>
  )
}

export default Loading;

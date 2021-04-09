/**
 * title: 自定义进度条渐变色
 * desc: linear-gradient 的封装。推荐只传两种颜色。
 */
import React from 'react';
import { FcProgress } from '@ngfed/fc-components';

const Demo = () => (
  <>
    <FcProgress
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={99.9}
    />
    <FcProgress
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
      percent={99.9}
      status="active"
    />
    <FcProgress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={90}
    />
    <FcProgress
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={100}
    />
  </>
);

export default Demo;

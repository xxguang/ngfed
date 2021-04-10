/**
 * title: 自定义样式
 * desc: 可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。
 * iframe: true // 设置为数值可控制 iframe 高度
 */

import React from 'react';
import { FcBackTop } from '@ngfed/fc-components';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

export default () => {
  return (
    <div style={{ height: '600vh', padding: 8 }}>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <div>Scroll to bottom</div>
      <FcBackTop>
        <div style={style}>UP</div>
      </FcBackTop>
    </div>
  );
};

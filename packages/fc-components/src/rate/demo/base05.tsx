/**
 * title: 其他字符
 * desc: 可以将星星替换为其他字符，比如字母，数字，字体图标甚至中文。
 */

import React from 'react';
import { FcRate } from '@ngfed/fc-components';
import { HeartOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcRate character={<HeartOutlined />} allowHalf />
      <br />
      <FcRate character="A" allowHalf style={{ fontSize: 36 }} />
      <br />
      <FcRate character="好" allowHalf />
    </>
  );
};

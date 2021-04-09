/**
 * title: 三种大小
 * desc: 我们为 `<Input />` 输入框定义了三种尺寸（大、默认、小），高度分别为 `40px`、`32px` 和 `24px`。
 */

import React from 'react';
import { FcInput } from '@ngfed/fc-components';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcInput size="large" placeholder="large size" prefix={<UserOutlined />} />
      <br />
      <br />
      <FcInput placeholder="default size" prefix={<UserOutlined />} />
      <br />
      <br />
      <FcInput size="small" placeholder="small size" prefix={<UserOutlined />} />
    </>
  );
};

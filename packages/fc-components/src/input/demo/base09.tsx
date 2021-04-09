/**
 * title: 密码框
 * desc: 密码框。
 */

import React from 'react';
import { FcInput, FcSpace } from '@ngfed/fc-components';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcSpace direction="vertical">
        <FcInput.Password placeholder="input password" />
        <FcInput.Password
          placeholder="input password"
          iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
        />
      </FcSpace>
    </>
  );
};

/**
 * title: 基本
 * desc: 头像有三种尺寸，两种形状可选。
 */

import React from 'react';
import { FcAvatar } from '@ngfed/fc-components';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <div>
        <FcAvatar size={64} icon={<UserOutlined />} />
        <FcAvatar size="large" icon={<UserOutlined />} />
        <FcAvatar icon={<UserOutlined />} />
        <FcAvatar size="small" icon={<UserOutlined />} />
      </div>
      <div>
        <FcAvatar shape="square" size={64} icon={<UserOutlined />} />
        <FcAvatar shape="square" size="large" icon={<UserOutlined />} />
        <FcAvatar shape="square" icon={<UserOutlined />} />
        <FcAvatar shape="square" size="small" icon={<UserOutlined />} />
      </div>
    </>
  );
};

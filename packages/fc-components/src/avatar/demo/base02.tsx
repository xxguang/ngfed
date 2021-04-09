/**
 * title: 类型
 * desc: 支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。
 */

import React from 'react';
import { FcAvatar, FcImage } from '@ngfed/fc-components';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcAvatar icon={<UserOutlined />} />
      <FcAvatar>U</FcAvatar>
      <FcAvatar size={40}>USER</FcAvatar>
      <FcAvatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <FcAvatar
        src={<FcImage src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      />
      <FcAvatar
        style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
        }}
      >
        U
      </FcAvatar>
      <FcAvatar
        style={{
          backgroundColor: '#87d068',
        }}
        icon={<UserOutlined />}
      />
    </>
  );
};

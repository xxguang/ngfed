/**
 * title: 带徽标的头像
 * desc: 通常用于消息提示。。
 */

import React from 'react';
import { FcAvatar, FcBadge } from '@ngfed/fc-components';
import { UserOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <span className="avatar-item">
        <FcBadge count={1}>
          <FcAvatar shape="square" icon={<UserOutlined />} />
        </FcBadge>
      </span>
      <span style={{ marginLeft: 20 }}>
        <FcBadge dot>
          <FcAvatar shape="square" icon={<UserOutlined />} />
        </FcBadge>
      </span>
    </>
  );
};

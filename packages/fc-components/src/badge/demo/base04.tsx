/**
 * title: 讨嫌的小红点
 * desc: 没有具体的数字。
 */

import React from 'react';
import { FcBadge } from '@ngfed/fc-components';

import { NotificationOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcBadge dot>
        <NotificationOutlined style={{ marginLeft: 10 }} />
      </FcBadge>
      <FcBadge count={0} dot>
        <NotificationOutlined style={{ marginLeft: 10 }} />
      </FcBadge>
      <FcBadge dot>
        <a href="#" style={{ marginLeft: 10 }}>
          Link something
        </a>
      </FcBadge>
    </>
  );
};

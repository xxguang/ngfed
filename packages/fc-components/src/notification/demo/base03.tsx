/**
 * title: 带有图标的通知提醒框
 * desc: 通知提醒框左侧有图标。`success`,`info`,`warning`,`error` 4 种消息
 */

import React from 'react';
import { FcButton, FcSpace, FcNotification } from '@ngfed/fc-components';

const openNotification = (placement) => {
  FcNotification.open({
    placement,
    message: `Notification Title ${placement}`,
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default () => {
  return (
    <>
      <FcSpace>
        <FcButton type="primary" onClick={() => openNotification('topRight')}>
          topRight
        </FcButton>
        <FcButton type="primary" onClick={() => openNotification('bottomRight')}>
          bottomRight
        </FcButton>
      </FcSpace>
    </>
  );
};

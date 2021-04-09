/**
 * title: 带有图标的通知提醒框
 * desc: 通知提醒框左侧有图标。`open`, `success`,`info`,`warning`,`error` 5种消息
 */

import React from 'react';
import { FcButton, FcSpace, FcNotification } from '@ngfed/fc-components';

const openNotificationWithIcon = (type) => {
  FcNotification[type]({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
  });
};

export default () => {
  return (
    <>
      <FcSpace>
        <FcButton type="primary" onClick={() => openNotificationWithIcon('open')}>
          open
        </FcButton>
        <FcButton type="primary" onClick={() => openNotificationWithIcon('success')}>
          Success
        </FcButton>
        <FcButton type="primary" onClick={() => openNotificationWithIcon('info')}>
          Info
        </FcButton>
        <FcButton type="primary" onClick={() => openNotificationWithIcon('warning')}>
          Warning
        </FcButton>
        <FcButton type="primary" onClick={() => openNotificationWithIcon('error')}>
          Error
        </FcButton>
      </FcSpace>
    </>
  );
};

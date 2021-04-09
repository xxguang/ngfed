/**
 * title: 基本使用
 * desc: 只需提供通知标题`message`, 说明`description` 即可
 */

import React from 'react';
import { FcButton, FcNotification } from '@ngfed/fc-components';

export default () => {
  const openNotification = () => {
    FcNotification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };

  return (
    <>
      <FcButton type="primary" onClick={openNotification}>
        {' '}
        open{' '}
      </FcButton>
    </>
  );
};

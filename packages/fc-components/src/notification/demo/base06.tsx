/**
 * title: 自动关闭的延时
 * desc: 自定义通知框自动关闭的延时，默认 4.5s，取消自动关闭只要将该值设为 0 即可。
 */

import React from 'react';
import { FcButton, FcNotification } from '@ngfed/fc-components';

const openNotification = () => {
  const args = {
    message: 'Notification Title',
    description:
      'I will never close automatically. This is a purposely very very long description that has many many characters and words.',
    duration: 0,
  };
  FcNotification.open(args);
};

export default () => {
  return (
    <>
      <FcButton type="primary" onClick={openNotification}>
        {' '}
        Open the notification box{' '}
      </FcButton>
    </>
  );
};

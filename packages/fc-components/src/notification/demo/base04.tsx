/**
 * title: 完整参数实例
 * desc: 演示`FcNotification`多个参数共同作用后的通知消息
 */

import React from 'react';
import { FcButton, FcNotification } from '@ngfed/fc-components';
import { SmileOutlined } from '@ant-design/icons';

export default () => {
  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <FcButton type="primary" size="small" onClick={() => FcNotification.close(key)}>
        Confirm
      </FcButton>
    );

    FcNotification.open({
      duration: 0,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      placement: 'bottomRight',
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        backgroundColor: 'lightblue',
      },
      btn,
      key,
      onClick: () => {
        console.log('Notification Clicked!');
      },
      onClose: () => {
        console.log('Notification Closed!');
      },
    });
  };

  return (
    <>
      <FcButton type="primary" onClick={openNotification}>
        open
      </FcButton>
    </>
  );
};

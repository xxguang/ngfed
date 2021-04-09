/**
 * title: 自定义图标
 * desc: 图标可以被自定义。
 */

import React from 'react';
import { FcButton, FcNotification } from '@ngfed/fc-components';
import { SmileOutlined } from '@ant-design/icons';

const openNotification = () => {
  FcNotification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    icon: <SmileOutlined style={{ color: '#108ee9' }} />,
  });
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

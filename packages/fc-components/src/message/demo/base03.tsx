/**
 * title: 修改延时
 * desc: 自定义时长 10s，默认时长为 3s。
 */
import React from 'react';
import { FcButton, FcMessage } from '@ngfed/fc-components';

const success = () => {
  FcMessage.success(
    'This is a prompt message for success, and it will disappear in 10 seconds',
    10,
  );
};

export default () => {
  return (
    <>
      <FcButton onClick={success}>Customized display duration</FcButton>
    </>
  );
};

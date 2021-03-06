/**
 * title: 自定义样式
 * desc: 使用 style 和 className 来定义样式。
 */
import React from 'react';
import { FcButton, FcMessage } from '@ngfed/fc-components';

const success = () => {
  FcMessage.success({
    content: 'This is a prompt message with custom className and style',
    className: 'custom-class',
    style: {
      marginTop: '20vh',
    },
  });
};

export default () => {
  return (
    <>
      <FcButton onClick={success}>Customized style</FcButton>
    </>
  );
};

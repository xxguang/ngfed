/**
 * title: 其他提示类型
 * desc: 包括成功、失败、警告。
 */
import React from 'react';
import { FcButton, FcSpace, FcMessage } from '@ngfed/fc-components';

const success = () => {
  FcMessage.success('This is a success message');
};

const error = () => {
  FcMessage.error('This is an error message');
};

const warning = () => {
  FcMessage.warning('This is a warning message');
};

export default () => {
  return (
    <>
      <FcSpace>
        <FcButton onClick={success}>Success</FcButton>
        <FcButton onClick={error}>Error</FcButton>
        <FcButton onClick={warning}>Warning</FcButton>
      </FcSpace>
      ,
    </>
  );
};

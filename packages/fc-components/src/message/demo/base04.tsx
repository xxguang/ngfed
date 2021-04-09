/**
 * title: 加载中
 * desc: 进行全局 loading，异步自行移除。
 */
import React from 'react';
import { FcButton, FcMessage } from '@ngfed/fc-components';

const success = () => {
  const hide = FcMessage.loading('Action in progress..', 0);
  // Dismiss manually and asynchronously
  setTimeout(hide, 2500);
};

export default () => {
  return (
    <>
      <FcButton onClick={success}>Display a loading indicator</FcButton>
    </>
  );
};

/**
 * title: Promise 接口
 * desc: 可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。
 */
import React from 'react';
import { FcButton, FcMessage } from '@ngfed/fc-components';

const success = () => {
  FcMessage.loading('Action in progress..', 2.5)
    .then(() => FcMessage.success('Loading finished', 2.5))
    .then(() => FcMessage.info('Loading finished is finished', 2.5));
};
export default () => {
  return (
    <>
      <FcButton onClick={success}>Display sequential messages</FcButton>
    </>
  );
};

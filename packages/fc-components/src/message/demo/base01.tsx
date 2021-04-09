/**
 * title: 普通提示
 * desc: 信息提醒反馈。
 */
import React from 'react';
import { FcButton, FcMessage } from '@ngfed/fc-components';

const info = () => {
  FcMessage.info('This is a normal message');
};

export default () => {
  return (
    <>
      <FcButton type="primary" onClick={info}>
        Display normal message
      </FcButton>
      ,
    </>
  );
};

/**
 * title: 信息提示
 * desc: 各种类型的信息提示，只提供一个按钮用于关闭。
 */
import React from 'react';
import { FcButton, FcModal, FcSpace } from '@ngfed/fc-components';

function info() {
  FcModal.info({
    title: 'This is a notification message',
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  FcModal.success({
    content: 'some messages...some messages...',
  });
}

function error() {
  FcModal.error({
    title: 'This is an error message',
    content: 'some messages...some messages...',
  });
}

function warning() {
  FcModal.warning({
    title: 'This is a warning message',
    content: 'some messages...some messages...',
  });
}

export default () => {
  return (
    <>
      <FcSpace>
        <FcButton onClick={info}>Info</FcButton>
        <FcButton onClick={success}>Success</FcButton>
        <FcButton onClick={error}>Error</FcButton>
        <FcButton onClick={warning}>Warning</FcButton>
      </FcSpace>
    </>
  );
};

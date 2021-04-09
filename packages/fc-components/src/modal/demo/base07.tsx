/**
 * title: 手动更新和移除
 * desc: 手动更新和关闭 Modal.method 方式创建的对话框。
 */
import React from 'react';
import { FcModal, FcButton } from '@ngfed/fc-components';

function countDown() {
  let secondsToGo = 5;
  const modal = FcModal.success({
    title: 'This is a notification message',
    content: `This modal will be destroyed after ${secondsToGo} second.`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default () => {
  return (
    <>
      <FcButton onClick={countDown}>Open modal to close in 5s</FcButton>
    </>
  );
};

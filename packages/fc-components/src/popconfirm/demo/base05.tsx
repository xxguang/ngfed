/**
 * title: 异步关闭
 * desc: 点击确定后异步关闭气泡确认框，例如提交表单。
 */

import React, { useState } from 'react';
import { FcPopconfirm, FcButton } from '@ngfed/fc-components';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <FcPopconfirm
        title="Title"
        visible={visible}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
        cancelText="取消"
        okText="确认"
      >
        <FcButton type="primary" onClick={showPopconfirm}>
          Open Popconfirm with async logic
        </FcButton>
      </FcPopconfirm>
    </>
  );
};

export default App;

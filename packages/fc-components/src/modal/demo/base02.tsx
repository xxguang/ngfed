/**
 * title: 异步关闭
 * desc: 点击确定后异步关闭对话框，例如提交表单。
 */
import React from 'react';
import { FcButton, FcModal } from '@ngfed/fc-components';

const App = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
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
      <FcButton type="primary" onClick={showModal}>
        Open Modal with async logic
      </FcButton>
      <FcModal
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </FcModal>
    </>
  );
};

export default () => {
  return (
    <>
      <App />
    </>
  );
};

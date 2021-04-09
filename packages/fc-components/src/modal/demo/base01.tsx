/**
 * title: 基本
 * desc: 第一个对话框。
 */
import React, { useState } from 'react';
import { FcButton, FcModal } from '@ngfed/fc-components';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <FcButton type="primary" onClick={showModal}>
        Open Modal
      </FcButton>
      <FcModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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

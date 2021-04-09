/**
 * title: 基础抽屉
 * desc: 基础抽屉，点击触发按钮抽屉从右滑出，点击遮罩区关闭。
 */
import React, { useState } from 'react';
import { FcDrawer, FcButton } from '@ngfed/fc-components';

const App: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <FcButton type="primary" onClick={showDrawer}>
        Open
      </FcButton>
      <FcDrawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </FcDrawer>
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

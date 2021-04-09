/**
 * title: 平滑地卸载
 * desc: 平滑、自然的卸载提示。
 */

import React, { useState } from 'react';
import { FcAlert } from '@ngfed/fc-components';
const App: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div>
      {visible ? (
        <FcAlert message="Alert Message Text" type="success" closable afterClose={handleClose} />
      ) : null}
      <p>placeholder text here</p>
    </div>
  );
};
export default () => {
  return (
    <>
      <App />
    </>
  );
};

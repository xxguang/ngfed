/**
 * title: 顶部公告
 * desc: 页面顶部通告形式，默认有图标且 type 为 'warning'。
 */

import React from 'react';
import { FcAlert } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcAlert message="Warning text" banner />
      <br />
      <FcAlert
        message="Very long warning text warning text text text text text text text"
        banner
        closable
      />
      <br />
      <FcAlert showIcon={false} message="Warning text without icon" banner />
      <br />
      <FcAlert type="error" message="Error text" banner />
    </>
  );
};

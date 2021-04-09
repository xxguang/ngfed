/**
 * title: 四种样式
 * desc: 共有四种样式 success、info、warning、error。
 */

import React from 'react';
import { FcAlert } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcAlert message="Success Text" type="success" />
      <FcAlert message="Info Text" type="info" />
      <FcAlert message="Warning Text" type="warning" />
      <FcAlert message="Error Text" type="error" />
    </>
  );
};

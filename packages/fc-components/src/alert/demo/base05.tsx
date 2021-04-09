/**
 * title: 含有辅助性文字介绍
 * desc: 含有辅助性文字介绍的警告提示。
 */

import React from 'react';
import { FcAlert } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcAlert
        message="Success Text"
        description="Success Description Success Description Success Description"
        type="success"
      />
      <FcAlert
        message="Info Text"
        description="Info Description Info Description Info Description Info Description"
        type="info"
      />
      <FcAlert
        message="Warning Text"
        description="Warning Description Warning Description Warning Description Warning Description"
        type="warning"
      />
      <FcAlert
        message="Error Text"
        description="Error Description Error Description Error Description Error Description"
        type="error"
      />
    </>
  );
};

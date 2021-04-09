/**
 * title: 图标
 * desc: 可口的图标让信息类型更加醒目。
 */

import React from 'react';
import { FcAlert } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcAlert message="Success Tips" type="success" showIcon />
      <FcAlert message="Informational Notes" type="info" showIcon />
      <FcAlert message="Warning" type="warning" showIcon closable />
      <FcAlert message="Error" type="error" showIcon />
      <FcAlert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <FcAlert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <FcAlert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
      <FcAlert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </>
  );
};

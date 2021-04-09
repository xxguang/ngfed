/**
 * title: 操作
 * desc: 可以在右上角自定义操作项。
 */

import React from 'react';
import { FcAlert, FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcAlert
        message="Success Tips"
        type="success"
        showIcon
        action={
          <FcButton size="small" type="text">
            UNDO
          </FcButton>
        }
        closable
      />
      <FcAlert
        message="Error Text"
        showIcon
        description="Error Description Error Description Error Description Error Description"
        type="error"
        action={
          <FcButton size="small" danger>
            Detail
          </FcButton>
        }
      />
      <FcAlert
        message="Warning Text"
        type="warning"
        action={
          <FcSpace>
            <FcButton size="small" type="ghost">
              Done
            </FcButton>
          </FcSpace>
        }
        closable
      />
      <FcAlert
        message="Info Text"
        description="Info Description Info Description Info Description Info Description"
        type="info"
        action={
          <FcSpace direction="vertical">
            <FcButton size="small" type="primary">
              Accept
            </FcButton>
            <FcButton size="small" danger type="ghost">
              Decline
            </FcButton>
          </FcSpace>
        }
        closable
      />
    </>
  );
};

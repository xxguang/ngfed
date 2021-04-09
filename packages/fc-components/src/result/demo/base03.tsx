/**
 * title: Warning
 * desc: 警告类型的结果。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <FcResult
      status="warning"
      title="There are some problems with your operation."
      extra={
        <FcButton type="primary" key="console">
          Go Console
        </FcButton>
      }
    />
  );
};

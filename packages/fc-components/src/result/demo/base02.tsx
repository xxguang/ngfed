/**
 * title: Info
 * desc: 展示处理结果。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <FcResult
      title="Your operation has been executed"
      extra={
        <FcButton type="primary" key="console">
          Go Console
        </FcButton>
      }
    />
  );
};

/**
 * title: 500
 * desc: 服务器发生了错误。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <FcResult
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={<FcButton type="primary">Back Home</FcButton>}
    />
  );
};

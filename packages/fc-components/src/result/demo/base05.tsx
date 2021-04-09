/**
 * title: 404
 * desc: 此页面未找到。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <FcResult
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<FcButton type="primary">Back Home</FcButton>}
    />
  );
};

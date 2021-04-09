/**
 * title: 403
 * desc: 你没有此页面的访问权限。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <FcResult
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<FcButton type="primary">Back Home</FcButton>}
    />
  );
};

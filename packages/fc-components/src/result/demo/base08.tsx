/**
 * title: 自定义 icon
 * desc: 自定义 icon。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

import { SmileOutlined } from '@ant-design/icons';

export default () => {
  return (
    <FcResult
      icon={<SmileOutlined />}
      title="Great, we have done all the operations!"
      extra={<FcButton type="primary">Next</FcButton>}
    />
  );
};

/**
 * title: 自动大小
 * desc: 自适应内容高度。
 */

import React from 'react';
import { FcMentions } from '@ngfed/fc-components';

const { Option } = FcMentions;

export default () => {
  return (
    <>
      <FcMentions autoSize style={{ width: '100%' }}>
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </FcMentions>
    </>
  );
};

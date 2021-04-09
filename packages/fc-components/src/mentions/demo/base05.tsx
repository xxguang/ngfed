/**
 * title: 向上展开
 * desc: 向上展开建议。
 */

import React from 'react';
import { FcMentions } from '@ngfed/fc-components';

const { Option } = FcMentions;

export default () => {
  return (
    <>
      <FcMentions style={{ width: '100%' }} placement="top">
        <Option value="afc163">afc163</Option>
        <Option value="zombieJ">zombieJ</Option>
        <Option value="yesmeck">yesmeck</Option>
      </FcMentions>
    </>
  );
};

/**
 * title: 按钮尺寸
 * desc: 按钮有大、中、小三种尺寸。<br/>通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton size="small" type="primary">
          small
        </FcButton>
        <FcButton type="primary">button</FcButton>
        <FcButton size="large" type="primary">
          large
        </FcButton>
      </FcSpace>
    </>
  );
};

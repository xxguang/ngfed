/**
 * title: 箭头指向
 * desc: 设置了 arrowPointAtCenter 后，箭头将指向目标元素的中心。
 */

import React from 'react';
import { FcTooltip, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcTooltip placement="topLeft" title="Prompt Text">
        <FcButton>Align edge / 边缘对齐</FcButton>
      </FcTooltip>
      <FcTooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
        <FcButton>Arrow points to center / 箭头指向中心</FcButton>
      </FcTooltip>
    </>
  );
};

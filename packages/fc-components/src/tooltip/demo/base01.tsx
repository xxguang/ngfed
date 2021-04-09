/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcTooltip } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcTooltip title="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </FcTooltip>
      ,
    </>
  );
};

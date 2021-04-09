/**
 * title: 控制 ToolTip 的显示
 * desc:  当 tooltipVisible 为 true 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
 */

import React from 'react';
import { FcSlider } from '@ngfed/fc-components';

export default () => {
  return <FcSlider defaultValue={30} tooltipVisible />;
};

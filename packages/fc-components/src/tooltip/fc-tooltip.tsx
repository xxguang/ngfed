import React from 'react';
import { Tooltip } from 'antd';
import omit from 'rc-util/lib/omit';

function FcTooltip(props) {
  props = omit(props, [
    'arrowPointAtCenter',
    'autoAdjustOverflow',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'visible',
  ]);
  return (
    <>
      <Tooltip {...props} />
    </>
  );
}
export default FcTooltip;

import React from 'react';
import { Popover } from 'antd';
import omit from 'rc-util/lib/omit';

function FcPopover(props) {
  props = omit(props, ['']);
  return (
    <>
      <Popover {...props} />
    </>
  );
}
export default FcPopover;

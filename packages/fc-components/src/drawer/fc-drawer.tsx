import React from 'react';
import { Drawer } from 'antd';
import omit from 'rc-util/lib/omit';

function FcDrawer(props) {
  props = omit(props, ['closable', 'closeIcon', 'keyboard', 'mask', 'maskClosable']);
  return (
    <>
      <Drawer {...props} />
    </>
  );
}
export default FcDrawer;

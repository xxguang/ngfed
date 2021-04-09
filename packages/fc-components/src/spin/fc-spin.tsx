import React from 'react';
import { Spin } from 'antd';
import omit from 'rc-util/lib/omit';

function FcSpin(props) {
  props = omit(props, ['']);
  return (
    <>
      <Spin {...props} />
    </>
  );
}
export default FcSpin;

import React from 'react';
import { Divider } from 'antd';
import omit from 'rc-util/lib/omit';

function FcDivider(props) {
  props = omit(props, ['']);
  return (
    <>
      <Divider {...props} />
    </>
  );
}
export default FcDivider;

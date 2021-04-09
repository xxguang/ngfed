import React from 'react';
import { Transfer } from 'antd';
import omit from 'rc-util/lib/omit';

function FcExample(props) {
  props = omit(props, ['']);
  return (
    <>
      <Transfer {...props} />
    </>
  );
}
export default FcExample;

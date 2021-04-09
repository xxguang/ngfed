import React from 'react';
import { Result } from 'antd';
import omit from 'rc-util/lib/omit';

function FcResult(props) {
  props = omit(props, ['']);
  return (
    <>
      <Result {...props} />
    </>
  );
}
export default FcResult;

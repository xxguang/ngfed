import React from 'react';
import { Row } from 'antd';
import omit from 'rc-util/lib/omit';

function FcFow(props) {
  props = omit(props, ['']);
  return (
    <>
      <Row {...props} />
    </>
  );
}
export default FcFow;

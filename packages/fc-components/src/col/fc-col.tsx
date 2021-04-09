import React from 'react';
import { Col } from 'antd';
import omit from 'rc-util/lib/omit';

function FcCol(props) {
  props = omit(props, ['']);
  return (
    <>
      <Col {...props} />
    </>
  );
}
export default FcCol;

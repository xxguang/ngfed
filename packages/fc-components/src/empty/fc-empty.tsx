import React from 'react';
import { Empty } from 'antd';
import omit from 'rc-util/lib/omit';

function FcEmpty(props) {
  props = omit(props, ['imageStyle']);
  return (
    <>
      <Empty {...props} />
    </>
  );
}
FcEmpty.PRESENTED_IMAGE_SIMPLE = Empty.PRESENTED_IMAGE_SIMPLE;

export default FcEmpty;

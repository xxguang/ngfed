import React from 'react';
import { Cascader } from 'antd';
import omit from 'rc-util/lib/omit';

function FcCascader(props) {
  props = omit(props, [
    'allowClear',
    'bordered',
    'fieldNames',
    'popupPlacement',
    'matchInputWidth',
  ]);
  return (
    <>
      <Cascader {...props} />
    </>
  );
}
export default FcCascader;

import React from 'react';
import { Affix } from 'antd';
import omit from 'rc-util/lib/omit';

function FcAffix(props) {
  props = omit(props, ['']);
  return (
    <>
      <Affix {...props} />
    </>
  );
}
export default FcAffix;

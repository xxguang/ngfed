import React from 'react';
import { Button } from 'antd';
import omit from 'rc-util/lib/omit';

function FcExample(props) {
  props = omit(props, ['']);
  return (
    <>
      <Button {...props} />
    </>
  );
}
export default FcExample;

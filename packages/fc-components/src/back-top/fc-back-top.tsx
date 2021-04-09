import React from 'react';
import { Button } from 'antd';
import omit from 'rc-util/lib/omit';

function FcBackTop(props) {
  props = omit(props, ['duration']);
  return (
    <>
      <Button {...props} />
    </>
  );
}
export default FcBackTop;

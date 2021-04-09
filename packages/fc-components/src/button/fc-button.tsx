import React, { useState } from 'react';
import { Button } from 'antd';
import omit from 'rc-util/lib/omit';

const { Group } = Button;
function FcButton(props) {
  props = omit(props, ['htmlType']);
  return (
    <>
      <Button {...props} />
    </>
  );
}
FcButton.Group = Group;
export default FcButton;

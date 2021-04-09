import React from 'react';
import { Radio } from 'antd';
import omit from 'rc-util/lib/omit';

const { Group, Button } = Radio;

function FcRadio(props) {
  props = omit(props, ['']);
  return <Radio {...props} />;
}

FcRadio.Group = Group;
FcRadio.Button = Button;

export default FcRadio;

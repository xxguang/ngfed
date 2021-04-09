import React from 'react';
import { Switch } from 'antd';
import omit from 'rc-util/lib/omit';

function FcSwitch(props) {
  props = omit(props, ['loading']);
  return (
    <>
      <Switch {...props} />
    </>
  );
}
export default FcSwitch;

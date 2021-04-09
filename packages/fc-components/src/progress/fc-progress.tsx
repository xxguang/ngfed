import React from 'react';
import { Progress } from 'antd';
import omit from 'rc-util/lib/omit';

function FcProgress(props) {
  props = omit(props, ['showInfo', 'trailColor']);
  return (
    <>
      <Progress {...props} />
    </>
  );
}
export default FcProgress;

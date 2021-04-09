import React from 'react';
import { Badge } from 'antd';
import omit from 'rc-util/lib/omit';

function FcBadge(props) {
  props = omit(props, ['offset', 'status', 'text', 'title']);
  return (
    <>
      <Badge {...props} />
    </>
  );
}

function FcRibbon(props) {
  props = omit(props, ['']);
  return (
    <>
      <Badge.Ribbon {...props} />
    </>
  );
}

FcBadge.Ribbon = FcRibbon;
export default FcBadge;

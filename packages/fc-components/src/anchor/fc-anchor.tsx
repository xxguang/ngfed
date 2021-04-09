import React from 'react';
import { Anchor } from 'antd';
import omit from 'rc-util/lib/omit';

const { Link } = Anchor;

function FcAnchor(props) {
  props = omit(props, ['bounds', 'targetOffset']);
  return <Anchor {...props} />;
}

FcAnchor.Link = Link;
export default FcAnchor;

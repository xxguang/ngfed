import React from 'react';
import { Avatar } from 'antd';
import omit from 'rc-util/lib/omit';

const { Group } = Avatar;

function FcAvatar(props) {
  props = omit(props, ['gap', 'srcSet', 'onError']);
  return <Avatar {...props} />;
}

function FcGroup(props) {
  props = omit(props, ['maxPopoverPlacement', 'maxStyle']);
  return <Group {...props} />;
}

FcAvatar.Group = FcGroup;
export default FcAvatar;

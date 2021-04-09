import React from 'react';
import omit from 'rc-util/lib/omit';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
function FcTag(props) {
  props = omit(props, ['closeIcon']);
  return <Tag {...props} />;
}

FcTag.CheckableTag = CheckableTag;

export default FcTag;

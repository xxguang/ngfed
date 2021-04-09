import React from 'react';
import { Mentions } from 'antd';
import omit from 'rc-util/lib/omit';

const { Option, getMentions } = Mentions;
function FcMentions(props) {
  props = omit(props, ['']);
  return <Mentions {...props} />;
}

FcMentions.Option = Option;
FcMentions.getMentions = getMentions;

export default FcMentions;

import React from 'react';
import { Timeline } from 'antd';
import omit from 'rc-util/lib/omit';

const { Item } = Timeline;

function FcTimeline(props) {
  props = omit(props, ['']);
  return (
    <>
      <Timeline {...props} />
    </>
  );
}

FcTimeline.Item = Item;
export default FcTimeline;

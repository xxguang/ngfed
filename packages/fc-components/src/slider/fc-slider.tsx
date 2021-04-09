import React from 'react';
import { Slider } from 'antd';
import omit from 'rc-util/lib/omit';

function FcSlider(props) {
  props = omit(props, ['']);
  return <Slider {...props} />;
}
export default FcSlider;

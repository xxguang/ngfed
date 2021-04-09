/**
 * title: 垂直
 * desc:  垂直方向的 Slider。
 */

import React from 'react';
import { FcSlider } from '@ngfed/fc-components';

const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};

const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

export default () => {
  return (
    <>
      <div style={style}>
        <FcSlider vertical defaultValue={30} />
      </div>
      <div style={style}>
        <FcSlider vertical range step={10} defaultValue={[20, 50]} />
      </div>
      <div style={style}>
        <FcSlider vertical range marks={marks} defaultValue={[26, 37]} />
      </div>
    </>
  );
};

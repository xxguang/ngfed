/**
 * title: 标签
 * desc: 使用 label 标签单独展示时间。
 */

import React from 'react';
import { useState } from 'react';
import { FcTimeline, FcRadio } from '@ngfed/fc-components';

export default () => {
  const [mode, setMode] = useState('left');

  const onChange = (e) => {
    setMode(e.target.value);
  };

  return (
    <>
      <FcRadio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
        }}
      >
        <FcRadio value="left">Left</FcRadio>
        <FcRadio value="right">Right</FcRadio>
        <FcRadio value="alternate">Alternate</FcRadio>
      </FcRadio.Group>
      <FcTimeline mode={mode}>
        <FcTimeline.Item label="2015-09-01">Create a services</FcTimeline.Item>
        <FcTimeline.Item label="2015-09-01 09:12:11">
          Solve initial network problems
        </FcTimeline.Item>
        <FcTimeline.Item>Technical testing</FcTimeline.Item>
        <FcTimeline.Item label="2015-09-01 09:12:11">Network problems being solved</FcTimeline.Item>
      </FcTimeline>
    </>
  );
};

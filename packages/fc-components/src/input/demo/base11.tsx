/**
 * title: 带字数提示的文本域
 * desc: 展示字数提示。
 */

import React from 'react';
import { FcInput } from '@ngfed/fc-components';
const { TextArea } = FcInput;

const onChange = (e) => {
  console.log('Change:', e.target.value);
};
export default () => {
  return (
    <>
      <TextArea showCount maxLength={100} onChange={onChange} />
    </>
  );
};

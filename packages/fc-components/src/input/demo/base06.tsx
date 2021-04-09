/**
 * title: 文本域
 * desc: 用于多行输入。
 */

import React from 'react';
import { FcInput } from '@ngfed/fc-components';

const { TextArea } = FcInput;

export default () => {
  return (
    <>
      <TextArea rows={4} />
    </>
  );
};

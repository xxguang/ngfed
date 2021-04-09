/**
 * title: 无边框
 * desc: 没有边框。
 */

import React from 'react';
import { FcInput } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcInput placeholder="Borderless" bordered={false} />
    </>
  );
};

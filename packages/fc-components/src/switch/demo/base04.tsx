/**
 * title: 两种大小
 * desc: size="small" 表示小号开关。
 */

import React from 'react';
import { FcSwitch } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcSwitch defaultChecked />
      <br />
      <FcSwitch size="small" defaultChecked />
    </>
  );
};

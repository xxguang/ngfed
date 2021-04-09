/**
 * title: 基本
 * desc: 最简单的用法,使用defaultChecked设置默认选择，onChange控制状态切换。
 */

import React from 'react';
import { FcSwitch } from '@ngfed/fc-components';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

export default () => {
  return <FcSwitch defaultChecked onChange={onChange} />;
};

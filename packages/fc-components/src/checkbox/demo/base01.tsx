/**
 * title: 基本使用
 * desc: 基本使用，也可以通过设置`disabled`属性让checkbox不可用。
 */

import React from 'react';
import { FcCheckbox } from '@ngfed/fc-components';

export default () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
      <FcCheckbox onChange={onChange}>Checkbox</FcCheckbox>
      <br />
      <FcCheckbox defaultChecked={false} disabled>
        Checkbox
      </FcCheckbox>
      <br />
      <FcCheckbox defaultChecked disabled>
        Checkbox
      </FcCheckbox>
    </>
  );
};

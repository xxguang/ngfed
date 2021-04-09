/**
 * title: 布局
 * desc: Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局。
 */

import React from 'react';
import { FcCheckbox, FcRow, FcCol } from '@ngfed/fc-components';

export default () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  return (
    <>
      <FcCheckbox.Group style={{ width: '100%' }} onChange={onChange}>
        <FcRow>
          <FcCol span={8}>
            <FcCheckbox value="A">A</FcCheckbox>
          </FcCol>
          <FcCol span={8}>
            <FcCheckbox value="B">B</FcCheckbox>
          </FcCol>
          <FcCol span={8}>
            <FcCheckbox value="C">C</FcCheckbox>
          </FcCol>
          <FcCol span={8}>
            <FcCheckbox value="D">D</FcCheckbox>
          </FcCol>
          <FcCol span={8}>
            <FcCheckbox value="E">E</FcCheckbox>
          </FcCol>
        </FcRow>
      </FcCheckbox.Group>
    </>
  );
};

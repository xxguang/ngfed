/**
 * title: Checkbox 组
 * desc: 方便的从数组生成 Checkbox 组。
 */

import React from 'react';
import { FcCheckbox } from '@ngfed/fc-components';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

export default () => {
  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  return (
    <>
      <FcCheckbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
      <br />
      <br />
      <FcCheckbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
      <br />
      <br />
      <FcCheckbox.Group
        options={optionsWithDisabled}
        disabled
        defaultValue={['Apple']}
        onChange={onChange}
      />
    </>
  );
};

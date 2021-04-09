/**
 * title: 单选组合
 * desc: 一组互斥的 Radio 配合使用。
 */

import React from 'react';
import { FcRadio } from '@ngfed/fc-components';

const App = () => {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <FcRadio.Group onChange={onChange} value={value}>
      <FcRadio value={1}>A</FcRadio>
      <FcRadio value={2}>B</FcRadio>
      <FcRadio value={3}>C</FcRadio>
      <FcRadio value={4}>D</FcRadio>
    </FcRadio.Group>
  );
};

export default () => {
  return (
    <>
      <App />
    </>
  );
};

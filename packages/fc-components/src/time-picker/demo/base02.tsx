/**
 * title: 受控组件
 * desc: value 和 onChange 需要配合使用。
 */

import React, { useState } from 'react';
import { FcTimePicker } from '@ngfed/fc-components';

const index = () => {
  const [value, setValue] = useState(null);

  const onChange = (time) => {
    setValue(time);
  };

  return <FcTimePicker value={value} onChange={onChange} />;
};
export default index;

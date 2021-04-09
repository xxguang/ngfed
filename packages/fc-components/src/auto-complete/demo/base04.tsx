/**
 * title: 不区分大小写
 * desc: 不区分大小写的 FcAutoComplete
 */

import React from 'react';
import { FcAutoComplete } from '@ngfed/fc-components';

const options = [
  {
    value: 'Burns Bay Road',
  },
  {
    value: 'Downing Street',
  },
  {
    value: 'Wall Street',
  },
];

const Complete = () => (
  <FcAutoComplete
    style={{
      width: 200,
    }}
    options={options}
    placeholder="try to type `b`"
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);

export default Complete;

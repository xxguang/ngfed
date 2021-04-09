/**
 * title: 基本使用
 * desc: 基本使用，通过 `options` 设置自动完成的数据源。
 */

import React, { useState } from 'react';
import { FcAutoComplete } from '@ngfed/fc-components';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

const Complete = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };
  return (
    <>
      <FcAutoComplete
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
      <br />
      <br />
      <FcAutoComplete
        value={value}
        options={options}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        onChange={onChange}
        placeholder="control mode"
      />
    </>
  );
};

export default Complete;

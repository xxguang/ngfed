/**
 * title: 自定义输入组件
 * desc: 自定义输入组件。
 */

import React, { useState } from 'react';
import { FcAutoComplete, FcInput } from '@ngfed/fc-components';
const { TextArea } = FcInput;

const Complete = () => {
  const [options, setOptions] = useState([]);

  const handleSearch = (value) => {
    setOptions(
      !value
        ? []
        : [
            {
              value,
            },
            {
              value: value + value,
            },
            {
              value: value + value + value,
            },
          ],
    );
  };

  const handleKeyPress = (ev) => {
    console.log('handleKeyPress', ev);
  };

  const onSelect = (value) => {
    console.log('onSelect', value);
  };

  return (
    <FcAutoComplete
      options={options}
      style={{
        width: 200,
      }}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <TextArea
        placeholder="input here"
        className="custom"
        style={{
          height: 50,
        }}
        onKeyPress={handleKeyPress}
      />
    </FcAutoComplete>
  );
};

export default Complete;

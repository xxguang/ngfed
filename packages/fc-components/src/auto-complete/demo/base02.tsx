/**
 * title: 自定义选项
 * desc: 也可以直接传 `AutoComplete.Option` 作为 `AutoComplete` 的 `children`，而非使用 `options`。
 */

import React, { useState } from 'react';
import { FcAutoComplete } from '@ngfed/fc-components';
const { Option } = FcAutoComplete;

const Complete = () => {
  const [result, setResult] = useState([]);

  const handleSearch = (value) => {
    let res = [];

    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }

    setResult(res);
  };

  return (
    <FcAutoComplete
      style={{
        width: 200,
      }}
      onSearch={handleSearch}
      placeholder="input here"
    >
      {result.map((email) => (
        <Option key={email} value={email}>
          {email}
        </Option>
      ))}
    </FcAutoComplete>
  );
};

export default Complete;

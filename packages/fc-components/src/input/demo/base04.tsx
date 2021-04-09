/**
 * title: 搜索框
 * desc: 带有搜索按钮的输入框。
 */

import React from 'react';
import { FcInput, FcSpace } from '@ngfed/fc-components';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = FcInput;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

export default () => {
  return (
    <>
      <FcSpace direction="vertical">
        <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
        <Search
          placeholder="input search text"
          allowClear
          onSearch={onSearch}
          style={{ width: 200 }}
        />
        <Search placeholder="input search text" onSearch={onSearch} enterButton />
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </FcSpace>
    </>
  );
};

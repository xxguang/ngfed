/**
 * title: 搜索框 loading
 * desc: 用于 `onSearch` 的时候展示 `loading`。
 */

import React from 'react';
import { FcInput } from '@ngfed/fc-components';

const { Search } = FcInput;

export default () => {
  return (
    <>
      <Search placeholder="input search loading default" loading />
      <br />
      <br />
      <Search placeholder="input search loading with enterButton" loading enterButton />
      <br />
      <br />
      <Search placeholder="input search text" enterButton="Search" loading />
    </>
  );
};

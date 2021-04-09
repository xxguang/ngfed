/**
 * title: 按钮图标
 * desc: 当需要在`FcButton`内嵌入图标时，可以设置 `icon` 属性，或者直接在 `FcButton` 内使用图标组件
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
import { SearchOutlined } from '@ant-design/icons';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton icon={<SearchOutlined />} shape="circle"></FcButton>
        <FcButton icon={<SearchOutlined />} type="default">
          Search
        </FcButton>
        <FcButton icon={<SearchOutlined />} type="primary">
          Search
        </FcButton>
      </FcSpace>
    </>
  );
};

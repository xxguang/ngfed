/**
 * title: 全部展示
 * desc: 展示所有配置选项。
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
import { SearchOutlined } from '@ant-design/icons';
export default () => {
  return (
    <>
      <FcPagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
      />
    </>
  );
};

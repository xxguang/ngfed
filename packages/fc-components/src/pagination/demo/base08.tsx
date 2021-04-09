/**
 * title: 总数
 * desc: 通过设置 `showTotal` 展示总共有多少数据。
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcPagination
        total={85}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={20}
        defaultCurrent={1}
      />
      <br />
      <FcPagination
        total={85}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={20}
        defaultCurrent={1}
      />
    </>
  );
};

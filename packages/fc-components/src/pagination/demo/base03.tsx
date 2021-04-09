/**
 * title: 改变
 * desc: 改变每页显示条目数。
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
export default () => {
  function onShowSizeChange(current, pageSize) {
    console.log(current, pageSize);
  }

  return (
    <>
      <FcPagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
      />
    </>
  );
};

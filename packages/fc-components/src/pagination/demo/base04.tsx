/**
 * title: 跳转
 * desc: 快速跳转到某一页。
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
export default () => {
  function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
  }

  return (
    <>
      <FcPagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
    </>
  );
};

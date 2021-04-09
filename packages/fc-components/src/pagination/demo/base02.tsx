/**
 * title: 更多
 * desc: 更多分页
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcPagination defaultCurrent={6} total={500} />
    </>
  );
};

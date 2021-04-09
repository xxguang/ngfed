/**
 * title: 基础
 * desc: 基础分页
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcPagination defaultCurrent={1} total={50} />
    </>
  );
};

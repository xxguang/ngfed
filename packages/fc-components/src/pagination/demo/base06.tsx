import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcPagination simple defaultCurrent={2} total={50} />
    </>
  );
};

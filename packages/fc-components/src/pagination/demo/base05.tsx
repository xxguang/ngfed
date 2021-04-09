/**
 * title: 点击事件绑定
 * desc: 设置`onClick`属性即可义绑定一个DOM点击事件。`event`事件对象直接在参数中收
 */

import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
export default () => {
  function showTotal(total) {
    return `Total ${total} items`;
  }

  return (
    <>
      <FcPagination size="small" total={50} disabled />
      <br />
      <FcPagination size="small" total={50} showSizeChanger showQuickJumper />
      <br />
      <FcPagination size="small" total={50} showTotal={showTotal} />
    </>
  );
};

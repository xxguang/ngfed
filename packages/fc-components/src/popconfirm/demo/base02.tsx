/**
 * title: 国际化
 * desc: 使用 okText 和 cancelText 自定义按钮文字。
 */

import React from 'react';
import { FcPopconfirm } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcPopconfirm title="Are you sure？" okText="Yes" cancelText="No">
        <a href="#">Delete</a>
      </FcPopconfirm>
      ,
    </>
  );
};

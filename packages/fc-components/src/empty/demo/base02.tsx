/**
 * title: 选择图片
 * desc: 可以通过设置 image 为 FcEmpty.PRESENTED_IMAGE_SIMPLE 选择另一种风格的图片。
 */
import React from 'react';
import { FcEmpty } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcEmpty image={FcEmpty.PRESENTED_IMAGE_SIMPLE} />
    </>
  );
};

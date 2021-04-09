/**
 * title: 基本用法
 * desc: 单击图像可以放大显示。
 */
import React from 'react';
import { FcImage } from '@ngfed/fc-components';

function ImageDemo() {
  return (
    <FcImage
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

export default ImageDemo;

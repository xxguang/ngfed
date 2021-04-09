/**
 * title: 多张图片预览
 * desc: 点击左右切换按钮可以预览多张图片
 */
import React from 'react';
import { FcImage } from '@ngfed/fc-components';

function ImageDemo() {
  return (
    <FcImage.PreviewGroup>
      <FcImage
        width={200}
        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
      />
      <FcImage
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
      />
    </FcImage.PreviewGroup>
  );
}

export default ImageDemo;

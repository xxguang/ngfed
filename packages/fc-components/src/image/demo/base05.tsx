/**
 * title: 自定义预览图片
 * desc: 可以设置不同的预览图片。
 */
import React from 'react';
import { FcImage } from '@ngfed/fc-components';

function ImageDemo() {
  return (
    <FcImage
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
      preview={{
        src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }}
    />
  );
}

export default ImageDemo;

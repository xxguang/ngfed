/**
 * title: 上传前转换文件
 * desc: 使用 beforeUpload 转换上传的文件（例如添加水印）。
 */

import React from 'react';
import { FcUpload, FcButton } from '@ngfed/fc-components';

import { UploadOutlined } from '@ant-design/icons';

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob(resolve);
        };
      };
    });
  },
};

export default () => {
  return (
    <>
      <FcUpload {...props}>
        <FcButton icon={<UploadOutlined />}>Upload</FcButton>
      </FcUpload>
    </>
  );
};

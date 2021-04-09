/**
 * title: 只上传 png 图片
 * desc: beforeUpload 返回 false 或 Promise.reject 时，只用于拦截上传行为，不会阻止文件进入上传列表（原因）。
    如果需要阻止列表展现，可以通过返回 Upload.LIST_IGNORE 实现。
 */

import React from 'react';
import { FcUpload, FcButton, FcMessage } from '@ngfed/fc-components';

import { UploadOutlined } from '@ant-design/icons';

const props = {
  beforeUpload: (file) => {
    if (file.type !== 'image/png') {
      FcMessage.error(`${file.name} is not a png file`);
    }
    return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};

export default () => {
  return (
    <>
      <FcUpload {...props}>
        <FcButton icon={<UploadOutlined />}>Upload png only</FcButton>
      </FcUpload>
    </>
  );
};

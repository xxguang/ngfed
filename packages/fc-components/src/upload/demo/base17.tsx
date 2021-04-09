/**
 * title: 自定义进度条样式
 * desc: 使用 progress 属性自定义进度条样式。
 */

import React from 'react';
import { FcUpload, FcButton, FcMessage } from '@ngfed/fc-components';

import { UploadOutlined } from '@ant-design/icons';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      FcMessage.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      FcMessage.error(`${info.file.name} file upload failed.`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: (percent) => `${parseFloat(percent.toFixed(2))}%`,
  },
};

export default () => {
  return (
    <>
      <FcUpload {...props}>
        <FcButton icon={<UploadOutlined />}>Click to Upload</FcButton>
      </FcUpload>
    </>
  );
};

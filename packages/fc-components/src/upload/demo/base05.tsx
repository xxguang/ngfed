/**
 * title: 文件夹上传
 * desc: 支持上传一个文件夹里的所有文件。
 */

import React from 'react';
import { FcUpload, FcButton } from '@ngfed/fc-components';

import { UploadOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcUpload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
        <FcButton icon={<UploadOutlined />}>Upload Directory</FcButton>
      </FcUpload>
    </>
  );
};

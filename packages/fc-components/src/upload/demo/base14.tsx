/**
 * title: 限制数量
 * desc: 通过 maxCount 限制上传数量。当为 1 时，始终用最新上传的代替当前。
 */

import React from 'react';
import { FcUpload, FcButton, FcSpace } from '@ngfed/fc-components';
import { UploadOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcSpace direction="vertical" style={{ width: '100%' }} size="large">
        <FcUpload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={1}
        >
          <FcButton icon={<UploadOutlined />}>Upload (Max: 1)</FcButton>
        </FcUpload>
        <FcUpload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture"
          maxCount={3}
          multiple
        >
          <FcButton icon={<UploadOutlined />}>Upload (Max: 3)</FcButton>
        </FcUpload>
      </FcSpace>
    </>
  );
};

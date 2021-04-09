/**
 * title: 图片列表样式
 * desc: 上传文件为图片，可展示本地缩略图。IE8/9 不支持浏览器本地缩略图展示（Ref），可以写 thumbUrl 属性来代替。
 */

import React from 'react';
import { FcUpload, FcButton } from '@ngfed/fc-components';
import { UploadOutlined } from '@ant-design/icons';
import './base13.css';

const fileList = [
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'yyy.png',
    status: 'error',
  },
];

export default () => {
  return (
    <>
      <FcUpload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        defaultFileList={[...fileList]}
      >
        <FcButton icon={<UploadOutlined />}>Upload</FcButton>
      </FcUpload>
      <br />
      <br />
      <FcUpload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture"
        defaultFileList={[...fileList]}
        className="upload-list-inline"
      >
        <FcButton icon={<UploadOutlined />}>Upload</FcButton>
      </FcUpload>
    </>
  );
};

import React from 'react';
import { Upload } from 'antd';
import omit from 'rc-util/lib/omit';

function FcUpload(props) {
  props = omit(props, [
    'iconRender',
    'openFileDialogOnClick',
    'previewFile',
    'withCredentials',
    'onDownload',
  ]);
  return (
    <>
      <Upload {...props} />
    </>
  );
}

export default FcUpload;

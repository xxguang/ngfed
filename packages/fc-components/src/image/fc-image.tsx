import React from 'react';
import { Image } from 'antd';
import omit from 'rc-util/lib/omit';

function FcImage(props) {
  props = omit(props, ['alt', 'onError']);
  return (
    <>
      <Image {...props} />
    </>
  );
}
FcImage.PreviewGroup = Image.PreviewGroup;
export default FcImage;

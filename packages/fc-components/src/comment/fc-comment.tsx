import React from 'react';
import { Comment } from 'antd';
import omit from 'rc-util/lib/omit';

function FcComment(props) {
  props = omit(props, ['']);
  return (
    <>
      <Comment {...props} />
    </>
  );
}
export default FcComment;

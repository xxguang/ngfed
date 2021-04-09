import React from 'react';
import { Skeleton } from 'antd';
import omit from 'rc-util/lib/omit';

const { Button, Avatar, Input, Image } = Skeleton;

function FcSkeleton(props) {
  props = omit(props, ['active', 'round']);
  return (
    <>
      <Skeleton {...props} />
    </>
  );
}
FcSkeleton.Button = Button;
FcSkeleton.Avatar = Avatar;
FcSkeleton.Input = Input;
FcSkeleton.Image = Image;
export default FcSkeleton;

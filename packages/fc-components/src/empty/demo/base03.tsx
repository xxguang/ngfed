/**
 * title: 自定义
 * desc: 自定义图片链接、图片大小、描述、附属内容。
 */
import React from 'react';
import { FcEmpty, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcEmpty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 60,
        }}
        description={
          <span>
            Customize <a href="#API">Description</a>
          </span>
        }
      >
        <FcButton type="primary">Create Now</FcButton>
      </FcEmpty>
    </>
  );
};

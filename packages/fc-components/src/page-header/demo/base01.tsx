/**
 * title: 标准样式
 * desc: 标准页头，适合使用在需要简单描述的场景。
 */
import React from 'react';
import { FcPageHeader } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcPageHeader
        style={{ border: '1px solid rgb(235, 237, 240)' }}
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </>
  );
};

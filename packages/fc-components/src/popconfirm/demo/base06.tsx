/**
 * title: 自定义 Icon 图标
 * desc: 自定义提示 icon。
 */

import React from 'react';
import { FcPopconfirm } from '@ngfed/fc-components';
import { QuestionCircleOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <FcPopconfirm
        title="Are you sure？"
        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
      >
        <a href="#">Delete</a>
      </FcPopconfirm>
      ,
    </>
  );
};

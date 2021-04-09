/**
 * title: 危险按钮
 * desc: 当某一项操作具有较高风险时候，我们建议使用`danger`属性的按钮提示风险，如涉及数据删除的行为。
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton danger>Button</FcButton>
        <FcButton type="primary" danger>
          Button
        </FcButton>
      </FcSpace>
    </>
  );
};

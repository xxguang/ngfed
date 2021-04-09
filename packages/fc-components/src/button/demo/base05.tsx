/**
 * title: 点击事件绑定
 * desc: 设置`onClick`属性即可义绑定一个DOM点击事件。`event`事件对象直接在参数中收
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton type="primary" onClick={(e) => alert(`button on click ${e}`)}>
          Button
        </FcButton>
      </FcSpace>
    </>
  );
};

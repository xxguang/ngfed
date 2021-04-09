/**
 * title: 加载中状态
 * desc: 添加`loading`属性即可让按钮处于加载状态, 注意：处于`loading`状态的按钮是无法触发点击的，这也符合交互的逻辑。
 */

import React from 'react';
import { FcButton, FcSpace } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcSpace>
        <FcButton
          type="primary"
          loading
          onClick={() => {
            alert('click button');
          }}
        >
          loading
        </FcButton>
        <FcButton type="primary" loading={{ delay: 3 }}>
          loading
        </FcButton>
        <FcButton type="primary" loading={{ delay: 3 }} disabled>
          loading
        </FcButton>
        <FcButton type="primary" loading={{ delay: 3 }} danger>
          loading
        </FcButton>
      </FcSpace>
    </>
  );
};

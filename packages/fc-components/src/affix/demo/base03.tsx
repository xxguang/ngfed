/**
 * title: 滚动容器
 * desc: 用 `target` 设置 `Affix` 需要监听其滚动事件的元素，默认为 `window`。
 */
import React, { useState } from 'react';
import { FcAffix, FcButton } from '@ngfed/fc-components';
import './base03.css';
export default () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <div className="scrollable-container" ref={setContainer}>
      <div className="background">
        <FcAffix target={() => container}>
          <FcButton type="primary">Fixed at the top of container</FcButton>
        </FcAffix>
      </div>
    </div>
  );
};

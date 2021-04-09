/**
 * title: Paragraph
 * desc: 段落排版的样式
 */

import React from 'react';
import { FcTypography } from '@ngfed/fc-components';

const { Paragraph, Link } = FcTypography;
export default () => {
  return (
    <>
      <Paragraph>
        业务沉淀基础组件库，涉及部分视觉规范或业务逻辑,业务沉淀基础组件库，涉及部分视觉规范或业务逻辑,业务沉淀基础组件库，涉及部分视觉规范或业务逻辑,业务沉淀基础组件库，涉及部分视觉规范或业务逻辑,
      </Paragraph>

      <Paragraph>
        <ul>
          <li>
            <Link href="/docs/spec/proximity-cn">设计原则</Link>
          </li>
          <li>
            <Link href="/docs/spec/overview-cn">设计模式</Link>
          </li>
          <li>
            <Link href="/docs/resources-cn">设计资源</Link>
          </li>
        </ul>
      </Paragraph>
    </>
  );
};

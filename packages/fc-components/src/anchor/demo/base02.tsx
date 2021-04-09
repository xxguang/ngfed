/**
 * title: 静态位置
 * desc: 不浮动，状态不随页面滚动变化。
 */

import React from 'react';
import { FcAnchor } from '@ngfed/fc-components';
const { Link } = FcAnchor;
export default () => {
  return (
    <FcAnchor affix={false}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#api" title="API">
        <Link href="#anchor-props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </FcAnchor>
  );
};

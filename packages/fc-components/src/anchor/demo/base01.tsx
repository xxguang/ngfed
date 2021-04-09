/**
 * title: 基本用法
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcAnchor } from '@ngfed/fc-components';
const { Link } = FcAnchor;
export default () => {
  return (
    <FcAnchor>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#api" title="API">
        <Link href="#anchor-props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </FcAnchor>
  );
};

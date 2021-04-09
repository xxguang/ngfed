/**
 * title: 监听锚点链接改变
 * desc:  监听锚点链接改变
 */

import React from 'react';
import { FcAnchor } from '@ngfed/fc-components';
const { Link } = FcAnchor;

const onChange = (link) => {
  console.log('Anchor:OnChange', link);
};

export default () => {
  return (
    <FcAnchor affix={false} onChange={onChange}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#api" title="API">
        <Link href="#anchor-props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </FcAnchor>
  );
};

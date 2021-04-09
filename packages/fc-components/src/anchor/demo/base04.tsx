/**
 * title: 自定义锚点高亮
 * desc:  自定义锚点高亮
 */

import React from 'react';
import { FcAnchor } from '@ngfed/fc-components';
const { Link } = FcAnchor;

const handleClick = (e, link) => {
  e.preventDefault();
  console.log(link);
};

export default () => {
  return (
    <FcAnchor affix={false} onClick={handleClick}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#api" title="API">
        <Link href="#anchor-props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </FcAnchor>
  );
};

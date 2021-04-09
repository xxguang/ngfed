/**
 * title: 设置锚点滚动偏移量
 * desc:  锚点目标滚动到屏幕正中间
 */

import React, { useState, useEffect } from 'react';
import { FcAnchor } from '@ngfed/fc-components';
const { Link } = FcAnchor;
const AnchorExample = () => {
  const [targetOffset, setTargetOffset] = useState(undefined);
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2);
  }, []);
  return (
    <FcAnchor targetOffset={targetOffset}>
      <Link href="#components-anchor-demo-basic" title="Basic demo" />
      <Link href="#components-anchor-demo-static" title="Static demo" />
      <Link href="#api" title="API">
        <Link href="#anchor-props" title="Anchor Props" />
        <Link href="#Link-Props" title="Link Props" />
      </Link>
    </FcAnchor>
  );
};

export default () => {
  return <AnchorExample />;
};

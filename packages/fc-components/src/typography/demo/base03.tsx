/**
 * title: Link
 * desc: 链接排版的样式
 */

import React from 'react';
import { FcTypography, FcSpace } from '@ngfed/fc-components';
const { Link } = FcTypography;
export default () => {
  return (
    <>
      <FcSpace direction="vertical">
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </FcSpace>
    </>
  );
};

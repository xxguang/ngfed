/**
 * title: 大小
 * desc: 可以设置有数字徽标的大小。
 */

import React from 'react';
import { FcBadge } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcBadge size="default" count={5}>
        <a href="#" className="head-example" />
      </FcBadge>
      <FcBadge size="small" count={5}>
        <a href="#" className="head-example" />
      </FcBadge>
    </>
  );
};

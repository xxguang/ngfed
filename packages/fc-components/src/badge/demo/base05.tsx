/**
 * title: 可点击
 * desc: 用 a 标签进行包裹即可。
 */

import React from 'react';
import { FcBadge } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <a href="#">
        <FcBadge count={5}>
          <span className="head-example" />
        </FcBadge>
      </a>
    </>
  );
};

/**
 * title: 封顶数字
 * desc: 超过 overflowCount 的会显示为 ${overflowCount}+，默认的 overflowCount 为 99。
 */

import React from 'react';
import { FcBadge } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcBadge count={99}>
        <a href="#" className="head-example" />
      </FcBadge>
      <FcBadge count={100}>
        <a href="#" className="head-example" />
      </FcBadge>
      <FcBadge count={99} overflowCount={10}>
        <a href="#" className="head-example" />
      </FcBadge>
      <FcBadge count={1000} overflowCount={999}>
        <a href="#" className="head-example" />
      </FcBadge>
    </>
  );
};

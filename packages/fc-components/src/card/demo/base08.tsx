/**
 * title: 内部卡片
 * desc: 可以放在普通卡片内部，展示多层级结构的信息。
 */

import React from 'react';
import { FcCard } from '@ngfed/fc-components';
export default () => {
  return (
    <>
      <FcCard title="FcCard title">
        <FcCard type="inner" title="Inner FcCard title" extra={<a href="#">More</a>}>
          Inner FcCard content
        </FcCard>
        <FcCard
          style={{ marginTop: 16 }}
          type="inner"
          title="Inner FcCard title"
          extra={<a href="#">More</a>}
        >
          Inner FcCard content
        </FcCard>
      </FcCard>
    </>
  );
};

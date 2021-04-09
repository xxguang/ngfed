/**
 * title: 更灵活的内容展示
 * desc: 可以利用 FcCard.Meta 支持更灵活的内容。
 */

import React from 'react';
import { FcCard } from '@ngfed/fc-components';

const { Meta } = FcCard;
export default () => {
  return (
    <>
      <FcCard
        hoverable
        style={{ width: 240 }}
        cover={
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </FcCard>
    </>
  );
};

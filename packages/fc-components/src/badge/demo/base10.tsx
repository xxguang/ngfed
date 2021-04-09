/**
 * title: 缎带
 * desc: 使用缎带型的徽标。
 */

import React from 'react';
import { FcBadge, FcCard } from '@ngfed/fc-components';
import { Card } from 'antd';
export default () => {
  return (
    <>
      <FcBadge.Ribbon text="Pushes open the window">
        <FcCard>And raises the spyglass.</FcCard>
      </FcBadge.Ribbon>
    </>
  );
};

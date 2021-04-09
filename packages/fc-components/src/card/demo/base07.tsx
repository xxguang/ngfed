/**
 * title: 网格型内嵌卡片
 * desc: 一种常见的卡片内容区隔模式。
 */

import React from 'react';
import { FcCard } from '@ngfed/fc-components';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
export default () => {
  return (
    <>
      <FcCard title="FcCard Title">
        <FcCard.Grid style={gridStyle}>Content</FcCard.Grid>
        <FcCard.Grid hoverable={false} style={gridStyle}>
          Content
        </FcCard.Grid>
        <FcCard.Grid style={gridStyle}>Content</FcCard.Grid>
        <FcCard.Grid style={gridStyle}>Content</FcCard.Grid>
        <FcCard.Grid style={gridStyle}>Content</FcCard.Grid>
        <FcCard.Grid style={gridStyle}>Content</FcCard.Grid>
        <FcCard.Grid style={gridStyle}>Content</FcCard.Grid>
      </FcCard>
    </>
  );
};

/**
 * title: 基本
 * desc: 最简单的用法。
 * background: '#fcfcfc'
 */
import React from 'react';
import { FbCard } from '@ngfed/fb-business';

console.log(FbCard);
export default () => {
  return (
    <>
      <FbCard
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
        bordered
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </FbCard>
      <br />
      <br />
      <FbCard
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
        loading={true}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </FbCard>
    </>
  );
};

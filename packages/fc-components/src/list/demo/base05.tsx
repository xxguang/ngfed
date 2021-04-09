/**
 * title: 响应式的栅格列表
 * desc: 响应式的栅格列表。尺寸与 Layout Grid 保持一致。
 */
import React from 'react';
import { FcList, FcCard } from '@ngfed/fc-components';

const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
export default () => {
  return (
    <>
      <FcList
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={data}
        renderItem={(item) => (
          <FcList.Item>
            <FcCard title={item.title}>Card content</FcCard>
          </FcList.Item>
        )}
      />
    </>
  );
};

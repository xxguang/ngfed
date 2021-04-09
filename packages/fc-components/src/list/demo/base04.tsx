/**
 * title: 栅格列表
 * desc: 可以通过设置 List 的 grid 属性来实现栅格列表，column 可设置期望显示的列数。
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
];
export default () => {
  return (
    <>
      <FcList
        grid={{ gutter: 16, column: 4 }}
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

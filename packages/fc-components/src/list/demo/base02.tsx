/**
 * title: 基础列表
 * desc: 基础列表。
 */
import React from 'react';
import { FcList, FcAvatar } from '@ngfed/fc-components';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

export default () => {
  return (
    <>
      <FcList
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <FcList.Item>
            <FcList.Item.Meta
              avatar={
                <FcAvatar src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </FcList.Item>
        )}
      />
    </>
  );
};

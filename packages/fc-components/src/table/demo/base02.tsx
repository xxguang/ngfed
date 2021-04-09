/**
 * title: JSX 风格的 API
 * desc: 使用 JSX 风格的 API（2.5.0 以后引入。
 */
import React from 'react';
import { FcTable, FcTag, FcSpace } from '@ngfed/fc-components';
const { Column, ColumnGroup } = FcTable;

export default () => {
  const data = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <>
      <FcTable dataSource={data}>
        <ColumnGroup title="Name">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="FcTags"
          dataIndex="tags"
          key="tags"
          render={(tags) => (
            <>
              {tags.map((tag) => (
                <FcTag color="blue" key={tag}>
                  {tag}
                </FcTag>
              ))}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <FcSpace size="middle">
              <a>Invite {record.lastName}</a>
              <a>Delete</a>
            </FcSpace>
          )}
        />
      </FcTable>
    </>
  );
};

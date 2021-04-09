/**
 * title: 嵌套子表格
 * desc: 展示每行数据更详细的信息。
 */
import React, { useState } from 'react';
import { FcTable, FcBadge, FcMenu, FcDropdown, FcSpace } from '@ngfed/fc-components';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <FcMenu>
    <FcMenu.Item>Action 1</FcMenu.Item>
    <FcMenu.Item>Action 2</FcMenu.Item>
  </FcMenu>
);

function NestedTable() {
  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <FcBadge status="success" />
            Finished
          </span>
        ),
      },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <FcSpace size="middle">
            <a>Pause</a>
            <a>Stop</a>
            <FcDropdown overlay={menu}>
              <a>
                More <DownOutlined />
              </a>
            </FcDropdown>
          </FcSpace>
        ),
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
      });
    }
    return <FcTable columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Platform', dataIndex: 'platform', key: 'platform' },
    { title: 'Version', dataIndex: 'version', key: 'version' },
    { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    { title: 'Creator', dataIndex: 'creator', key: 'creator' },
    { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
    { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00',
    });
  }

  return (
    <FcTable
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
  );
}

export default () => {
  return <NestedTable />;
};

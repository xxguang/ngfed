/**
 * title: 总结栏
 * desc: 通过 summary 设置总结栏。使用 Table.Summary.Cell 同步 Column 的固定状态。
 */

import React from 'react';
import { FcTable, FcTypography } from '@ngfed/fc-components';
const { Text } = FcTypography;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Borrow',
    dataIndex: 'borrow',
  },
  {
    title: 'Repayment',
    dataIndex: 'repayment',
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    borrow: 10,
    repayment: 33,
  },
  {
    key: '2',
    name: 'Jim Green',
    borrow: 100,
    repayment: 0,
  },
  {
    key: '3',
    name: 'Joe Black',
    borrow: 10,
    repayment: 10,
  },
  {
    key: '4',
    name: 'Jim Red',
    borrow: 75,
    repayment: 45,
  },
];

const fixedColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: true,
    width: 100,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const fixedData = [];
for (let i = 0; i < 6; i += 1) {
  fixedData.push({
    key: i,
    name: i % 2 ? 'Light' : 'Bamboo',
    description: 'Everything that has a beginning, has an end.',
  });
}

function renderSummary(pageData) {
  {
    let totalBorrow = 0;
    let totalRepayment = 0;

    pageData.forEach(({ borrow, repayment }) => {
      totalBorrow += borrow;
      totalRepayment += repayment;
    });

    return (
      <>
        <FcTable.Summary.Row>
          <FcTable.Summary.Cell>Total</FcTable.Summary.Cell>
          <FcTable.Summary.Cell>
            <Text type="danger">{totalBorrow}</Text>
          </FcTable.Summary.Cell>
          <FcTable.Summary.Cell>
            <Text>{totalRepayment}</Text>
          </FcTable.Summary.Cell>
        </FcTable.Summary.Row>
        <FcTable.Summary.Row>
          <FcTable.Summary.Cell>Balance</FcTable.Summary.Cell>
          <FcTable.Summary.Cell colSpan={2}>
            <Text type="danger">{totalBorrow - totalRepayment}</Text>
          </FcTable.Summary.Cell>
        </FcTable.Summary.Row>
      </>
    );
  }
}

export default () => {
  return (
    <>
      <FcTable
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        summary={(pageData) => {
          let totalBorrow = 0;
          let totalRepayment = 0;

          pageData.forEach(({ borrow, repayment }) => {
            totalBorrow += borrow;
            totalRepayment += repayment;
          });

          return (
            <>
              <FcTable.Summary.Row>
                <FcTable.Summary.Cell>Total</FcTable.Summary.Cell>
                <FcTable.Summary.Cell>
                  <Text type="danger">{totalBorrow}</Text>
                </FcTable.Summary.Cell>
                <FcTable.Summary.Cell>
                  <Text>{totalRepayment}</Text>
                </FcTable.Summary.Cell>
              </FcTable.Summary.Row>
              <FcTable.Summary.Row>
                <FcTable.Summary.Cell>Balance</FcTable.Summary.Cell>
                <FcTable.Summary.Cell colSpan={2}>
                  <Text type="danger">{totalBorrow - totalRepayment}</Text>
                </FcTable.Summary.Cell>
              </FcTable.Summary.Row>
            </>
          );
        }}
      />

      <br />

      <FcTable
        columns={fixedColumns}
        dataSource={fixedData}
        pagination={false}
        scroll={{ x: 2000 }}
        bordered
        summary={() => (
          <FcTable.Summary.Row>
            <FcTable.Summary.Cell index={0}>Summary</FcTable.Summary.Cell>
            <FcTable.Summary.Cell index={1}>This is a summary content</FcTable.Summary.Cell>
          </FcTable.Summary.Row>
        )}
      />
    </>
  );
};

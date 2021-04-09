/**
 * title: 带边框的
 * desc: 带边框和背景颜色列表。
 */
import React from 'react';
import { FcDescriptions, FcBadge } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcDescriptions title="User Info" bordered>
        <FcDescriptions.Item label="Product">Cloud Database</FcDescriptions.Item>
        <FcDescriptions.Item label="Billing Mode">Prepaid</FcDescriptions.Item>
        <FcDescriptions.Item label="Automatic Renewal">YES</FcDescriptions.Item>
        <FcDescriptions.Item label="Order time">2018-04-24 18:00:00</FcDescriptions.Item>
        <FcDescriptions.Item label="Usage Time" span={2}>
          2019-04-24 18:00:00
        </FcDescriptions.Item>
        <FcDescriptions.Item label="Status" span={3}>
          <FcBadge status="processing" text="Running" />
        </FcDescriptions.Item>
        <FcDescriptions.Item label="Negotiated Amount">$80.00</FcDescriptions.Item>
        <FcDescriptions.Item label="Discount">$20.00</FcDescriptions.Item>
        <FcDescriptions.Item label="Official Receipts">$60.00</FcDescriptions.Item>
        <FcDescriptions.Item label="Config Info">
          Data disk type: MongoDB
          <br />
          Database version: 3.4
          <br />
          Package: dds.mongo.mid
          <br />
          Storage space: 10 GB
          <br />
          Replication factor: 3
          <br />
          Region: East China 1<br />
        </FcDescriptions.Item>
      </FcDescriptions>
    </>
  );
};

/**
 * title: 响应式
 * desc: 通过响应式的配置可以实现在小屏幕设备上的完美呈现。
 */
import React from 'react';
import { FcDescriptions } from '@ngfed/fc-components';

export default () => {
  return (
    <div>
      <FcDescriptions
        title="Responsive FcDescriptions"
        bordered
        column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
      >
        <FcDescriptions.Item label="Product">Cloud Database</FcDescriptions.Item>
        <FcDescriptions.Item label="Billing">Prepaid</FcDescriptions.Item>
        <FcDescriptions.Item label="time">18:00:00</FcDescriptions.Item>
        <FcDescriptions.Item label="Amount">$80.00</FcDescriptions.Item>
        <FcDescriptions.Item label="Discount">$20.00</FcDescriptions.Item>
        <FcDescriptions.Item label="Official">$60.00</FcDescriptions.Item>
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
          Region: East China 1
        </FcDescriptions.Item>
      </FcDescriptions>
    </div>
  );
};

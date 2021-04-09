/**
 * title: 预设状态的标签
 * desc: 预设五种状态颜色，可以通过设置 color 为 success、 processing、error、default、warning 来代表不同的状态。
 */
import React from 'react';
import { FcTag, FcDivider } from '@ngfed/fc-components';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
export default () => {
  return (
    <>
      <FcDivider orientation="left">Without icon</FcDivider>
      <div>
        <FcTag color="success">success</FcTag>
        <FcTag color="processing">processing</FcTag>
        <FcTag color="error">error</FcTag>
        <FcTag color="warning">warning</FcTag>
        <FcTag color="default">default</FcTag>
      </div>
      <FcDivider orientation="left">With icon</FcDivider>
      <div>
        <FcTag icon={<CheckCircleOutlined />} color="success">
          success
        </FcTag>
        <FcTag icon={<SyncOutlined spin />} color="processing">
          processing
        </FcTag>
        <FcTag icon={<CloseCircleOutlined />} color="error">
          error
        </FcTag>
        <FcTag icon={<ExclamationCircleOutlined />} color="warning">
          warning
        </FcTag>
        <FcTag icon={<ClockCircleOutlined />} color="default">
          waiting
        </FcTag>
        <FcTag icon={<MinusCircleOutlined />} color="default">
          stop
        </FcTag>
      </div>
    </>
  );
};

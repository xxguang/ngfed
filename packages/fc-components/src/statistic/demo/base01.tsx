/**
 * title: 基本
 * desc: 简单的展示。
 */

import React from 'react';
import { FcButton, FcStatistic, FcRow, FcCol } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcRow gutter={16}>
        <FcCol span={12}>
          <FcStatistic title="Active Users" value={112893} />
        </FcCol>
        <FcCol span={12}>
          <FcStatistic title="Account Balance (CNY)" value={112893} precision={2} />
          <FcButton style={{ marginTop: 16 }} type="primary">
            Recharge
          </FcButton>
        </FcCol>
        <FcCol span={12}>
          <FcStatistic title="Active Users" value={112893} loading />
        </FcCol>
      </FcRow>
    </>
  );
};

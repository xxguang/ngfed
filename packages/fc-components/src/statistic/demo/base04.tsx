/**
 * title: 倒计时
 * desc: 倒计时组件。
 */
import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { FcStatistic, FcRow, FcCol } from '@ngfed/fc-components';
const { Countdown } = FcStatistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK
export default class Index extends React.Component {
  render() {
    return (
      <FcRow gutter={16}>
        <FcCol span={12}>
          <Countdown title="Countdown" value={deadline} />
        </FcCol>
        <FcCol span={12}>
          <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
        </FcCol>
        <FcCol span={24} style={{ marginTop: 32 }}>
          <Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
        </FcCol>
      </FcRow>
    );
  }
}

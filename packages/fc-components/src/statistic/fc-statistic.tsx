import React from 'react';
import { Statistic } from 'antd';
import omit from 'rc-util/lib/omit';

const { Countdown } = Statistic;
function FcStatistic(props) {
  props = omit(props, ['']);
  return (
    <>
      <Statistic {...props} />
    </>
  );
}

FcStatistic.Countdown = Countdown;
export default FcStatistic;

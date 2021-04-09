/**
 * title: Success
 * desc: 成功的结果。
 */
import React from 'react';
import { FcResult, FcButton } from '@ngfed/fc-components';

export default () => {
  return (
    <FcResult
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <FcButton type="primary" key="console">
          Go Console
        </FcButton>,
        <FcButton key="buy">Buy Again</FcButton>,
      ]}
    />
  );
};

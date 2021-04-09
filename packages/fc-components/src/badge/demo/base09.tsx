/**
 * title: 状态点
 * desc: 用于表示状态的小圆点。
 */

import React from 'react';
import { FcBadge } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcBadge status="success" />
      <FcBadge status="error" />
      <FcBadge status="default" />
      <FcBadge status="processing" />
      <FcBadge status="warning" />
      <br />
      <FcBadge status="success" text="Success" />
      <br />
      <FcBadge status="error" text="Error" />
      <br />
      <FcBadge status="default" text="Default" />
      <br />
      <FcBadge status="processing" text="Processing" />
      <br />
      <FcBadge status="warning" text="Warning" />
    </>
  );
};

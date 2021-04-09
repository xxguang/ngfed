/**
 * title: 基本
 * desc: 最简单的用法，适用于简短的警告提示。
 */

import React from 'react';
import { FcAlert } from '@ngfed/fc-components';

export default () => {
  return (
    <>
      <FcAlert message="Success Text" type="success" />
    </>
  );
};

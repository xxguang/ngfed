/**
 * title: 自定义描述文案
 * desc: 自定义描述文案。
 */

import React from 'react';
import { FcSpin, FcAlert } from '@ngfed/fc-components';

export default () => {
  return (
    <FcSpin tip="Loading...">
      <FcAlert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </FcSpin>
  );
};

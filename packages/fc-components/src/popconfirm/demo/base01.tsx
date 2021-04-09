/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcPopconfirm, FcMessage } from '@ngfed/fc-components';

function confirm(e) {
  console.log(e);
  FcMessage.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  FcMessage.error('Click on No');
}

export default () => {
  return (
    <>
      <FcPopconfirm
        title="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <a href="#">Delete</a>
      </FcPopconfirm>
      ,
    </>
  );
};

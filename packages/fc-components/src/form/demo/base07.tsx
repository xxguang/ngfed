/**
 * title: 表单尺寸
 * desc: 设置表单组件尺寸，仅对 antd 组件有效。
 */

import React, { useState } from 'react';
import { FcForm, FcInputNumber } from '@ngfed/fc-components';

function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: 'success',
      errorMsg: null,
    };
  }

  return {
    validateStatus: 'error',
    errorMsg: 'The prime between 8 and 12 is 11!',
  };
}

const formItemLayout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 12,
  },
};

const RawForm = () => {
  const [number, setNumber] = useState({
    value: 11,
  });
  const tips =
    'A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.';

  const onNumberChange = (value) => {
    setNumber({ ...validatePrimeNumber(value), value });
  };

  return (
    <FcForm>
      <FcForm.Item
        {...formItemLayout}
        label="Prime between 8 & 12"
        validateStatus={number.validateStatus}
        help={number.errorMsg || tips}
      >
        <FcInputNumber min={8} max={12} value={number.value} onChange={onNumberChange} />
      </FcForm.Item>
    </FcForm>
  );
};
export default () => {
  return <RawForm />;
};

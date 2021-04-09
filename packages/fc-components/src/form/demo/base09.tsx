/**
 * title: 动态校验规则
 * desc: 根据不同情况执行不同的校验规则。
 */

import React, { useState, useEffect } from 'react';
import { FcForm, FcInput, FcButton, FcCheckbox } from '@ngfed/fc-components';
const formItemLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

const DynamicRule = () => {
  const [form] = FcForm.useForm();
  const [checkNick, setCheckNick] = useState(false);
  useEffect(() => {
    form.validateFields(['nickname']);
  }, [checkNick]);

  const onFcCheckboxChange = (e) => {
    setCheckNick(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <FcForm form={form} name="dynamic_rule">
      <FcForm.Item
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <FcInput placeholder="Please input your name" />
      </FcForm.Item>
      <FcForm.Item
        {...formItemLayout}
        name="nickname"
        label="Nickname"
        rules={[
          {
            required: checkNick,
            message: 'Please input your nickname',
          },
        ]}
      >
        <FcInput placeholder="Please input your nickname" />
      </FcForm.Item>
      <FcForm.Item {...formTailLayout}>
        <FcCheckbox checked={checkNick} onChange={onFcCheckboxChange}>
          Nickname is required
        </FcCheckbox>
      </FcForm.Item>
      <FcForm.Item {...formTailLayout}>
        <FcButton type="primary" onClick={onCheck}>
          Check
        </FcButton>
      </FcForm.Item>
    </FcForm>
  );
};

export default () => {
  return <DynamicRule />;
};

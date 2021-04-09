/**
 * title: 基本使用
 * desc: 基本的表单数据域控制展示，包含布局、初始化、验证、提交。
 */

import React from 'react';
import { FcForm, FcInput, FcButton, FcCheckbox } from '@ngfed/fc-components';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <FcForm
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FcForm.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <FcInput />
      </FcForm.Item>

      <FcForm.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please FcInput your password!' }]}
      >
        <FcInput.Password />
      </FcForm.Item>

      <FcForm.Item {...tailLayout} name="remember" valuePropName="checked">
        <FcCheckbox>Remember me</FcCheckbox>
      </FcForm.Item>

      <FcForm.Item {...tailLayout}>
        <FcButton type="primary" htmlType="submit">
          Submit
        </FcButton>
      </FcForm.Item>
    </FcForm>
  );
};

export default () => {
  return <Demo />;
};

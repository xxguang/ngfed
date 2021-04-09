/**
 * title: 自定义校验
 * desc: 我们提供了 validateStatus help hasFeedback 等属性，你可以不通过 FcForm 自己定义校验的时机和内容。
 */
import React, { useState } from 'react';
import { SmileOutlined } from '@ant-design/icons';
import {
  FcForm,
  FcInput,
  FcDatePicker,
  FcTimePicker,
  FcSelect,
  FcCascader,
  FcInputNumber,
} from '@ngfed/fc-components';
const { Option } = FcSelect;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
};

export default () => {
  return (
    <FcForm {...formItemLayout}>
      <FcForm.Item
        label="Fail"
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <FcInput placeholder="unavailable choice" id="error" />
      </FcForm.Item>

      <FcForm.Item label="Warning" validateStatus="warning">
        <FcInput placeholder="Warning" id="warning" prefix={<SmileOutlined />} />
      </FcForm.Item>

      <FcForm.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <FcInput placeholder="I'm the content is being validated" id="validating" />
      </FcForm.Item>

      <FcForm.Item label="Success" hasFeedback validateStatus="success">
        <FcInput placeholder="I'm the content" id="success" />
      </FcForm.Item>

      <FcForm.Item label="Warning" hasFeedback validateStatus="warning">
        <FcInput placeholder="Warning" id="warning2" />
      </FcForm.Item>

      <FcForm.Item
        label="Fail"
        hasFeedback
        validateStatus="error"
        help="Should be combination of numbers & alphabets"
      >
        <FcInput placeholder="unavailable choice" id="error2" />
      </FcForm.Item>

      <FcForm.Item label="Success" hasFeedback validateStatus="success">
        <FcDatePicker
          style={{
            width: '100%',
          }}
        />
      </FcForm.Item>

      <FcForm.Item label="Warning" hasFeedback validateStatus="warning">
        <FcTimePicker
          style={{
            width: '100%',
          }}
        />
      </FcForm.Item>

      <FcForm.Item label="Error" hasFeedback validateStatus="error">
        <FcSelect allowClear>
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </FcSelect>
      </FcForm.Item>

      <FcForm.Item
        label="Validating"
        hasFeedback
        validateStatus="validating"
        help="The information is being validated..."
      >
        <FcCascader
          options={[
            {
              value: 'xx',
              label: 'xx',
            },
          ]}
          allowClear
        />
      </FcForm.Item>

      <FcForm.Item
        label="inline"
        style={{
          marginBottom: 0,
        }}
      >
        <FcForm.Item
          validateStatus="error"
          help="Please select the correct date"
          style={{
            display: 'inline-block',
            width: 'calc(50% - 12px)',
          }}
        >
          <FcDatePicker />
        </FcForm.Item>
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            lineHeight: '32px',
            textAlign: 'center',
          }}
        >
          -
        </span>
        <FcForm.Item
          style={{
            display: 'inline-block',
            width: 'calc(50% - 12px)',
          }}
        >
          <FcDatePicker />
        </FcForm.Item>
      </FcForm.Item>

      <FcForm.Item label="Success" hasFeedback validateStatus="success">
        <FcInputNumber
          style={{
            width: '100%',
          }}
        />
      </FcForm.Item>

      <FcForm.Item label="Success" hasFeedback validateStatus="success">
        <FcInput allowClear placeholder="with allowClear" />
      </FcForm.Item>

      <FcForm.Item label="Warning" hasFeedback validateStatus="warning">
        <FcInput.Password placeholder="with input password" />
      </FcForm.Item>

      <FcForm.Item label="Error" hasFeedback validateStatus="error">
        <FcInput.Password allowClear placeholder="with input password and allowClear" />
      </FcForm.Item>
    </FcForm>
  );
};

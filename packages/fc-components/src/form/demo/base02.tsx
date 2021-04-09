/**
 * title: 表单布局
 * desc: 表单有三种布局。
 */

import React, { useState } from 'react';

import { FcForm, FcInput, FcButton, FcRadio } from '@ngfed/fc-components';

const FormLayoutDemo = () => {
  const [form] = FcForm.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <>
      <FcForm
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <FcForm.Item label="Form Layout" name="layout">
          <FcRadio.Group value={formLayout}>
            <FcRadio.Button value="horizontal">Horizontal</FcRadio.Button>
            <FcRadio.Button value="vertical">Vertical</FcRadio.Button>
            <FcRadio.Button value="inline">Inline</FcRadio.Button>
          </FcRadio.Group>
        </FcForm.Item>
        <FcForm.Item label="Field A">
          <FcInput placeholder="input placeholder" />
        </FcForm.Item>
        <FcForm.Item label="Field B">
          <FcInput placeholder="input placeholder" />
        </FcForm.Item>
        <FcForm.Item {...buttonItemLayout}>
          <FcButton type="primary">Submit</FcButton>
        </FcForm.Item>
      </FcForm>
    </>
  );
};

export default () => {
  return <FormLayoutDemo />;
};

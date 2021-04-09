/**
 * title: 动态增减表单项
 * desc: 动态增加、减少表单项。add 方法参数可用于设置初始值。
 */

import React from 'react';
import { FcForm, FcInput, FcButton } from '@ngfed/fc-components';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const formItemLayoutWithOutLabel = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 20, offset: 4 },
  },
};

const DynamicFieldSet = () => {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <FcForm name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
      <FcForm.List
        name="names"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length < 2) {
                return Promise.reject(new Error('At least 2 passengers'));
              }
            },
          },
        ]}
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => (
              <FcForm.Item
                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={index === 0 ? 'Passengers' : ''}
                required={false}
                key={field.key}
              >
                <FcForm.Item
                  {...field}
                  validateTrigger={['onChange', 'onBlur']}
                  rules={[
                    {
                      required: true,
                      whitespace: true,
                      message: "Please input passenger's name or delete this field.",
                    },
                  ]}
                  noStyle
                >
                  <FcInput placeholder="passenger name" style={{ width: '60%' }} />
                </FcForm.Item>
                {fields.length > 1 ? (
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                ) : null}
              </FcForm.Item>
            ))}
            <FcForm.Item>
              <FcButton
                type="dashed"
                onClick={() => add()}
                style={{ width: '60%' }}
                icon={<PlusOutlined />}
              >
                Add field
              </FcButton>
              <FcButton
                type="dashed"
                onClick={() => {
                  add('The head item', 0);
                }}
                style={{ width: '60%', marginTop: '20px' }}
                icon={<PlusOutlined />}
              >
                Add field at head
              </FcButton>
              <FcForm.ErrorList errors={errors} />
            </FcForm.Item>
          </>
        )}
      </FcForm.List>
      <FcForm.Item>
        <FcButton type="primary" htmlType="submit">
          Submit
        </FcButton>
      </FcForm.Item>
    </FcForm>
  );
};

export default () => {
  return <DynamicFieldSet />;
};

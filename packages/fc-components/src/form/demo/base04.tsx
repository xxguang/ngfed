/**
 * title: 表单尺寸
 * desc: 设置表单组件尺寸，仅对 antd 组件有效。
 */
import React, { useState } from 'react';

import { TreeSelect } from 'antd';

import {
  FcForm,
  FcInput,
  FcButton,
  FcRadio,
  FcCascader,
  FcSelect,
  FcDatePicker,
  FcInputNumber,
  FcTreeSelect,
  FcSwitch,
} from '@ngfed/fc-components';

const FormSizeDemo = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <>
      <FcForm
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <FcForm.Item label="Form Size" name="size">
          <FcRadio.Group>
            <FcRadio.Button value="small">Small</FcRadio.Button>
            <FcRadio.Button value="default">Default</FcRadio.Button>
            <FcRadio.Button value="large">Large</FcRadio.Button>
          </FcRadio.Group>
        </FcForm.Item>
        <FcForm.Item label="Input">
          <FcInput />
        </FcForm.Item>
        <FcForm.Item label="Select">
          <FcSelect>
            <FcSelect.Option value="demo">Demo</FcSelect.Option>
          </FcSelect>
        </FcForm.Item>
        <FcForm.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </FcForm.Item>
        <FcForm.Item label="Cascader">
          <FcCascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </FcForm.Item>
        <FcForm.Item label="DatePicker">
          <FcDatePicker />
        </FcForm.Item>
        <FcForm.Item label="InputNumber">
          <FcInputNumber />
        </FcForm.Item>
        <FcForm.Item label="Switch">
          <FcSwitch />
        </FcForm.Item>
        <FcForm.Item label="Button">
          <FcButton>Button</FcButton>
        </FcForm.Item>
      </FcForm>
    </>
  );
};

export default () => {
  return <FormSizeDemo />;
};

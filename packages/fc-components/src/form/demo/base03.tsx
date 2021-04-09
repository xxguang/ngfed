/**
 * title: 必选样式
 * desc: 通过 requiredMark 切换必选与可选样式。
 */

import React, { useState } from 'react';
import { FcForm, FcInput, FcButton, FcRadio } from '@ngfed/fc-components';
import { InfoCircleOutlined } from '@ant-design/icons';

type RequiredMark = boolean | 'optional';

const FormLayoutDemo = () => {
  const [form] = FcForm.useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  return (
    <FcForm
      form={form}
      layout="vertical"
      initialValues={{ requiredMarkValue: requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
      <FcForm.Item label="Required Mark" name="requiredMarkValue">
        <FcRadio.Group>
          <FcRadio.Button value="optional">Optional</FcRadio.Button>
          <FcRadio.Button value>Required</FcRadio.Button>
          <FcRadio.Button value={false}>Hidden</FcRadio.Button>
        </FcRadio.Group>
      </FcForm.Item>
      <FcForm.Item label="Field A" required tooltip="This is a required field">
        <FcInput placeholder="input placeholder" />
      </FcForm.Item>
      <FcForm.Item
        label="Field B"
        tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
      >
        <FcInput placeholder="input placeholder" />
      </FcForm.Item>
      <FcForm.Item>
        <FcButton type="primary">Submit</FcButton>
      </FcForm.Item>
    </FcForm>
  );
};

export default () => {
  return <FormLayoutDemo />;
};

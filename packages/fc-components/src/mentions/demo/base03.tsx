/**
 * title: 配合 Form 使用
 * desc: 受控模式，例如配合 Form 使用。
 */

import React from 'react';
import { FcMentions, FcForm, FcButton } from '@ngfed/fc-components';
const { Option, getMentions } = FcMentions;

const App = () => {
  const [form] = FcForm.useForm();

  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async () => {
    try {
      const values = await form.validateFields();
      console.log('Submit:', values);
    } catch (errInfo) {
      console.log('Error:', errInfo);
    }
  };

  const checkMention = async (_, value) => {
    const mentions = getMentions(value);

    if (mentions.length < 2) {
      throw new Error('More than one must be selected!');
    }
  };

  return (
    <FcForm form={form} layout="horizontal" onFinish={onFinish}>
      <FcForm.Item
        name="coders"
        label="Top coders"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ validator: checkMention }]}
      >
        <FcMentions rows={1}>
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </FcMentions>
      </FcForm.Item>
      <FcForm.Item
        name="bio"
        label="Bio"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        rules={[{ required: true }]}
      >
        <FcMentions rows={3} placeholder="You can use @ to ref user here">
          <Option value="afc163">afc163</Option>
          <Option value="zombieJ">zombieJ</Option>
          <Option value="yesmeck">yesmeck</Option>
        </FcMentions>
      </FcForm.Item>
      <FcForm.Item wrapperCol={{ span: 14, offset: 6 }}>
        <FcButton htmlType="submit" type="primary">
          Submit
        </FcButton>
        &nbsp;&nbsp;&nbsp;
        <FcButton htmlType="button" onClick={onReset}>
          Reset
        </FcButton>
      </FcForm.Item>
    </FcForm>
  );
};

export default () => {
  return <App />;
};

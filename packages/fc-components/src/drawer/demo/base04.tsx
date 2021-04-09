/**
 * title: 抽屉表单
 * desc: 在抽屉中使用表单。
 */
import React from 'react';
import {
  FcDrawer,
  FcButton,
  FcForm,
  FcCol,
  FcRow,
  FcInput,
  FcDatePicker,
  FcSelect,
} from '@ngfed/fc-components';
// import { Form, Col, Row, Input, DatePicker, Select } from 'antd'
import { PlusOutlined } from '@ant-design/icons';

const { Option } = FcSelect;

class DrawerForm extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <FcButton type="primary" onClick={this.showDrawer}>
          <PlusOutlined /> New account
        </FcButton>
        <FcDrawer
          title="Create a new account"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: 'right',
              }}
            >
              <FcButton onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </FcButton>
              <FcButton onClick={this.onClose} type="primary">
                Submit
              </FcButton>
            </div>
          }
        >
          <FcForm layout="vertical" hideRequiredMark>
            <FcRow gutter={16}>
              <FcCol span={12}>
                <FcForm.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: 'Please enter user name' }]}
                >
                  <FcInput placeholder="Please enter user name" />
                </FcForm.Item>
              </FcCol>
              <FcCol span={12}>
                <FcForm.Item
                  name="url"
                  label="Url"
                  rules={[{ required: true, message: 'Please enter url' }]}
                >
                  <FcInput
                    style={{ width: '100%' }}
                    addonBefore="http://"
                    addonAfter=".com"
                    placeholder="Please enter url"
                  />
                </FcForm.Item>
              </FcCol>
            </FcRow>
            <FcRow gutter={16}>
              <FcCol span={12}>
                <FcForm.Item
                  name="owner"
                  label="Owner"
                  rules={[{ required: true, message: 'Please select an owner' }]}
                >
                  <FcSelect placeholder="Please select an owner">
                    <Option value="xiao">Xiaoxiao Fu</Option>
                    <Option value="mao">Maomao Zhou</Option>
                  </FcSelect>
                </FcForm.Item>
              </FcCol>
              <FcCol span={12}>
                <FcForm.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <FcSelect placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </FcSelect>
                </FcForm.Item>
              </FcCol>
            </FcRow>
            <FcRow gutter={16}>
              <FcCol span={12}>
                <FcForm.Item
                  name="approver"
                  label="Approver"
                  rules={[{ required: true, message: 'Please choose the approver' }]}
                >
                  <FcSelect placeholder="Please choose the approver">
                    <Option value="jack">Jack Ma</Option>
                    <Option value="tom">Tom Liu</Option>
                  </FcSelect>
                </FcForm.Item>
              </FcCol>
              <FcCol span={12}>
                <FcForm.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  <FcDatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                  />
                </FcForm.Item>
              </FcCol>
            </FcRow>
            <FcRow gutter={16}>
              <FcCol span={24}>
                <FcForm.Item
                  name="description"
                  label="Description"
                  rules={[
                    {
                      required: true,
                      message: 'please enter url description',
                    },
                  ]}
                >
                  <FcInput.TextArea rows={4} placeholder="please enter url description" />
                </FcForm.Item>
              </FcCol>
            </FcRow>
          </FcForm>
        </FcDrawer>
      </>
    );
  }
}
export default () => {
  return (
    <>
      <DrawerForm />
    </>
  );
};

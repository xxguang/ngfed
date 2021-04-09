/**
 * title: 按钮/头像/输入框/图像
 * desc: 骨架按钮、头像、输入框和图像。
 */
import React from 'react';
import { FcSkeleton, FcSpace, FcDivider, FcSwitch, FcForm, FcRadio } from '@ngfed/fc-components';

class Demo extends React.Component {
  state = {
    size: 'default',
    buttonShape: 'default',
    avatarShape: 'circle',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  handleShapeChange = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  render() {
    const { size, buttonShape, avatarShape } = this.state;
    return (
      <>
        <FcSpace>
          <FcSkeleton.Button size={size} shape={buttonShape} />
          <FcSkeleton.Button size={size} shape={buttonShape} />
          <FcSkeleton.Avatar size={size} shape={avatarShape} />
          <FcSkeleton.Input style={{ width: 200 }} size={size} />
        </FcSpace>
        <br />
        <br />
        <FcSkeleton.Image />
        <FcDivider />
        <FcForm layout="inline" style={{ margin: '16px 0' }}>
          <FcForm.Item label="Size">
            <FcRadio.Group value={size} onChange={this.handleSizeChange}>
              <FcRadio.Button value="default">Default</FcRadio.Button>
              <FcRadio.Button value="large">Large</FcRadio.Button>
              <FcRadio.Button value="small">Small</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
          <FcForm.Item label="Button Shape">
            <FcRadio.Group value={buttonShape} onChange={this.handleShapeChange('buttonShape')}>
              <FcRadio.Button value="default">Default</FcRadio.Button>
              <FcRadio.Button value="round">Round</FcRadio.Button>
              <FcRadio.Button value="circle">Circle</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
          <FcForm.Item label="Avatar Shape">
            <FcRadio.Group value={avatarShape} onChange={this.handleShapeChange('avatarShape')}>
              <FcRadio.Button value="square">Square</FcRadio.Button>
              <FcRadio.Button value="circle">Circle</FcRadio.Button>
            </FcRadio.Group>
          </FcForm.Item>
        </FcForm>
      </>
    );
  }
}

export default Demo;

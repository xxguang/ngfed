/**
 * title: 自定义尺寸
 * desc: 自定义尺寸，适应在各种容器中展示。
 */
import React from 'react';
import { FcDescriptions, FcRadio, FcButton } from '@ngfed/fc-components';

class Demo extends React.Component {
  state = {
    size: 'default',
  };

  onChange = (e) => {
    console.log('size checked', e.target.value);
    this.setState({
      size: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <FcRadio.Group onChange={this.onChange} value={this.state.size}>
          <FcRadio value="default">default</FcRadio>
          <FcRadio value="middle">middle</FcRadio>
          <FcRadio value="small">small</FcRadio>
        </FcRadio.Group>
        <br />
        <br />
        <FcDescriptions
          bordered
          title="Custom Size"
          size={this.state.size}
          extra={<FcButton type="primary">Edit</FcButton>}
        >
          <FcDescriptions.Item label="Product">Cloud Database</FcDescriptions.Item>
          <FcDescriptions.Item label="Billing">Prepaid</FcDescriptions.Item>
          <FcDescriptions.Item label="time">18:00:00</FcDescriptions.Item>
          <FcDescriptions.Item label="Amount">$80.00</FcDescriptions.Item>
          <FcDescriptions.Item label="Discount">$20.00</FcDescriptions.Item>
          <FcDescriptions.Item label="Official">$60.00</FcDescriptions.Item>
          <FcDescriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </FcDescriptions.Item>
        </FcDescriptions>
        <br />
        <br />
        <FcDescriptions
          title="Custom Size"
          size={this.state.size}
          extra={<FcButton type="primary">Edit</FcButton>}
        >
          <FcDescriptions.Item label="Product">Cloud Database</FcDescriptions.Item>
          <FcDescriptions.Item label="Billing">Prepaid</FcDescriptions.Item>
          <FcDescriptions.Item label="time">18:00:00</FcDescriptions.Item>
          <FcDescriptions.Item label="Amount">$80.00</FcDescriptions.Item>
          <FcDescriptions.Item label="Discount">$20.00</FcDescriptions.Item>
          <FcDescriptions.Item label="Official">$60.00</FcDescriptions.Item>
        </FcDescriptions>
      </div>
    );
  }
}

export default Demo;

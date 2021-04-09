/**
 * title:大小
 * desc:大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。
 */
import React from 'react';
import { FcTabs, FcRadio } from '@ngfed/fc-components';
const { TabPane } = FcTabs;
export default class Demo extends React.Component {
  state = { size: 'small' };

  onChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { size } = this.state;
    return (
      <div>
        <FcRadio.Group value={size} onChange={this.onChange} style={{ marginBottom: 16 }}>
          <FcRadio.Button value="small">Small</FcRadio.Button>
          <FcRadio.Button value="default">Default</FcRadio.Button>
          <FcRadio.Button value="large">Large</FcRadio.Button>
        </FcRadio.Group>
        <FcTabs defaultActiveKey="1" size={size} style={{ marginBottom: 32 }}>
          <TabPane tab="Tab 1" key="1">
            Content of tab 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of tab 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of tab 3
          </TabPane>
        </FcTabs>
        <FcTabs defaultActiveKey="1" type="card" size={size}>
          <TabPane tab="Card Tab 1" key="1">
            Content of card tab 1
          </TabPane>
          <TabPane tab="Card Tab 2" key="2">
            Content of card tab 2
          </TabPane>
          <TabPane tab="Card Tab 3" key="3">
            Content of card tab 3
          </TabPane>
        </FcTabs>
      </div>
    );
  }
}

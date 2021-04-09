/**
 * title:滑动
 * desc:可以左右、上下滑动，容纳更多标签。
 */
import React from 'react';
import { FcTabs, FcRadio } from '@ngfed/fc-components';

const { TabPane } = FcTabs;

export default class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <FcRadio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
          <FcRadio.Button value="top">Horizontal</FcRadio.Button>
          <FcRadio.Button value="left">Vertical</FcRadio.Button>
        </FcRadio.Group>
        <FcTabs defaultActiveKey="1" tabPosition={mode} style={{ height: 220 }}>
          {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
            <TabPane tab={`Tab-${i}`} key={i} disabled={i === 28}>
              Content of tab {i}
            </TabPane>
          ))}
        </FcTabs>
      </div>
    );
  }
}

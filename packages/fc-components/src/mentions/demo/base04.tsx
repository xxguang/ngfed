/**
 * title: 基本使用
 * desc: 基本使用
 */

import React from 'react';
import { FcMentions } from '@ngfed/fc-components';

const { Option } = FcMentions;

const MOCK_DATA = {
  '@': ['afc163', 'zombiej', 'yesmeck'],
  '#': ['1.0', '2.0', '3.0'],
};

class App extends React.Component {
  state = {
    prefix: '@',
  };

  onSearch = (_, prefix) => {
    this.setState({ prefix });
  };

  render() {
    const { prefix } = this.state;

    return (
      <FcMentions
        style={{ width: '100%' }}
        placeholder="input @ to mention people, # to mention tag"
        prefix={['@', '#']}
        onSearch={this.onSearch}
      >
        {(MOCK_DATA[prefix] || []).map((value) => (
          <Option key={value} value={value}>
            {value}
          </Option>
        ))}
      </FcMentions>
    );
  }
}

export default () => {
  return <App />;
};

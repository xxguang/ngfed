/**
 * title: 选择功能
 * desc: 一个通用的日历面板，支持年/月切换。
 */

import React from 'react';
import { FcCalendar, FcAlert } from '@ngfed/fc-components';
import moment from 'moment';

class App extends React.Component {
  state = {
    value: moment('2017-01-25'),
    selectedValue: moment('2017-01-25'),
  };

  onSelect = (value) => {
    this.setState({
      value,
      selectedValue: value,
    });
  };

  onPanelChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value, selectedValue } = this.state;
    return (
      <>
        <FcAlert
          message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}
        />
        <FcCalendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} />
      </>
    );
  }
}

export default () => {
  return <App />;
};

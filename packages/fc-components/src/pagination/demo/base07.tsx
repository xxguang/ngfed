import React from 'react';
import { FcPagination } from '@ngfed/fc-components';
class App extends React.Component {
  state = {
    current: 3,
  };

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return <FcPagination current={this.state.current} onChange={this.onChange} total={50} />;
  }
}
export default App;

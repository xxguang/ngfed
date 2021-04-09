/**
 * title: 包含子组件
 * desc: 加载占位图包含子组件。
 */
import React from 'react';
import { FcSkeleton, FcButton } from '@ngfed/fc-components';

class Demo extends React.Component {
  state = {
    loading: false,
  };

  showSkeleton = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  };

  render() {
    return (
      <div className="article">
        <FcSkeleton loading={this.state.loading}>
          <div>
            <h4>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and high quality design
              resources (Sketch and Axure), to help people create their product prototypes
              beautifully and efficiently.
            </p>
          </div>
        </FcSkeleton>
        <FcButton onClick={this.showSkeleton} disabled={this.state.loading}>
          Show Skeleton
        </FcButton>
      </div>
    );
  }
}

export default Demo;

/**
 * title: 基本
 * desc: 最简单的用法。
 */

import React from 'react';
import { FcCarousel } from '@ngfed/fc-components';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class Demo extends React.Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <>
        <FcCarousel afterChange={this.onChange}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </FcCarousel>
      </>
    );
  }
}

export default Demo;

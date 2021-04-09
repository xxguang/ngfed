/**
 * title: 位置
 * desc: 位置有 4 个方向。
 */

import React from 'react';
import { FcCarousel, FcRadio } from '@ngfed/fc-components';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

class PositionCarouselDemo extends React.Component {
  state = {
    dotPosition: 'top',
  };

  handlePositionChange = ({ target: { value } }) => {
    this.setState({
      dotPosition: value,
    });
  };

  render() {
    return (
      <>
        <FcRadio.Group
          onChange={this.handlePositionChange}
          value={this.state.dotPosition}
          style={{ marginBottom: 8 }}
        >
          <FcRadio.Button value="top">Top</FcRadio.Button>
          <FcRadio.Button value="bottom">Bottom</FcRadio.Button>
          <FcRadio.Button value="left">Left</FcRadio.Button>
          <FcRadio.Button value="right">Right</FcRadio.Button>
        </FcRadio.Group>
        <FcCarousel dotPosition={this.state.dotPosition}>
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
export default PositionCarouselDemo;

import React from 'react';
import { Carousel } from 'antd';
import omit from 'rc-util/lib/omit';

function FcCarousel(props) {
  props = omit(props, ['dotPosition', 'dots']);
  return (
    <>
      <Carousel {...props} />
    </>
  );
}
export default FcCarousel;

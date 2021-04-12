import React from 'react';
import { FcFeedback } from 'ngfed-fc-components';

export default () => {
  return (
    <>
      <FcFeedback color="red" shape="circle">
        <span>feedback circle</span>
      </FcFeedback>

      <FcFeedback color="green" shape="circle">
        <span>feedback circle</span>
      </FcFeedback>

      <FcFeedback color="blue" shape="circle">
        <span>feedback circle</span>
      </FcFeedback>

      <FcFeedback color="black" shape="circle">
        <span>feedback circle</span>
      </FcFeedback>
    </>
  );
};

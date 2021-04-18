import React from 'react';
import { FbFeedback } from '@ngfed/fb-business';

export default () => {
  return (
    <>
      <FbFeedback color="red" shape="circle">
        <span>feedback circle</span>
      </FbFeedback>

      <FbFeedback color="green" shape="circle">
        <span>feedback circle</span>
      </FbFeedback>

      <FbFeedback color="blue" shape="circle">
        <span>feedback circle</span>
      </FbFeedback>

      <FbFeedback color="black" shape="circle">
        <span>feedback circle</span>
      </FbFeedback>
    </>
  );
};

import React from 'react';
import { FcFeedback } from 'ngfed-fc-components';

export default () => {
  return (
    <>
      <FcFeedback color="red">
        <span>feedback red </span>
      </FcFeedback>

      <FcFeedback color="green">
        <span>feedback green </span>
      </FcFeedback>

      <FcFeedback color="blue">
        <span>feedback blue </span>
      </FcFeedback>

      <FcFeedback color="black">
        <span>feedback black </span>
      </FcFeedback>
    </>
  );
};

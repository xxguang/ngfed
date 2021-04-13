import React from 'react';
import { FbFeedback } from '@ngfed/fc-business';

export default () => {
  return (
    <>
      <FbFeedback color="red">
        <span>feedback red </span>
      </FbFeedback>

      <FbFeedback color="green">
        <span>feedback green </span>
      </FbFeedback>

      <FbFeedback color="blue">
        <span>feedback blue </span>
      </FbFeedback>

      <FbFeedback color="black">
        <span>feedback black </span>
      </FbFeedback>
    </>
  );
};

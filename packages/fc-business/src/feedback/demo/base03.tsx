import React from 'react';
import { FcFeedback } from 'ngfed-fc-components';

export default () => {
  return (
    <>
      <FcFeedback
        color="red"
        shape="circle"
        onClick={() => {
          alert('click feedback');
        }}
      >
        <span>feedback </span>
      </FcFeedback>
    </>
  );
};

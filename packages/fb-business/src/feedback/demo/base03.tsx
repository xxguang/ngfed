import React from 'react';
import { FbFeedback } from '@ngfed/fb-business';
export default () => {
  return (
    <>
      <FbFeedback
        color="red"
        shape="circle"
        onClick={() => {
          alert('click feedback');
        }}
      >
        <span>feedback </span>
      </FbFeedback>
    </>
  );
};

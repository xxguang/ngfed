import React from 'react';
import { FbFeedback } from '@ngfed/fc-business';
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

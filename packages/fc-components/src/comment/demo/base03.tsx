/**
 * title: 嵌套评论
 * desc: 评论可以嵌套。
 */
import React from 'react';
import { FcComment, FcAvatar } from '@ngfed/fc-components';
import moment from 'moment';
const ExampleComment = ({ children }) => (
  <FcComment
    actions={[<span key="comment-nested-reply-to">Reply to</span>]}
    author={<a>Han Solo</a>}
    avatar={
      <FcAvatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    }
    content={
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    }
  >
    {children}
  </FcComment>
);

export default () => {
  return (
    <>
      <ExampleComment>
        <ExampleComment>
          <ExampleComment />
          <ExampleComment />
        </ExampleComment>
      </ExampleComment>
    </>
  );
};

/**
 * title: 基本评论
 * desc: 一个基本的评论组件，带有作者、头像、时间和操作。
 */
import React from 'react';
import { FcComment, FcAvatar, FcTooltip } from '@ngfed/fc-components';
import moment from 'moment';

const actions = [<span key="comment-basic-reply-to">Reply to</span>];

export default () => {
  return (
    <>
      <FcComment
        actions={actions}
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
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <FcTooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </FcTooltip>
        }
      />
    </>
  );
};

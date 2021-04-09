/**
 * title: 回复框
 * desc: 评论编辑器组件提供了相同样式的封装以支持自定义评论编辑器。
 */
import React from 'react';
import { FcComment, FcAvatar, FcForm, FcButton, FcList, FcInput } from '@ngfed/fc-components';

import moment from 'moment';

const { TextArea } = FcInput;

const CommentList = ({ comments }) => (
  <FcList
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props) => <FcComment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <FcForm.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </FcForm.Item>
    <FcForm.Item>
      <FcButton htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add FcComment
      </FcButton>
    </FcForm.Item>
  </>
);

class App extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow(),
          },
        ],
      });
    }, 1000);
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
        {comments.length > 0 && <CommentList comments={comments} />}
        <FcComment
          avatar={
            <FcAvatar
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              alt="Han Solo"
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </>
    );
  }
}

export default App;

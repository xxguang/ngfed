/**
 * title: 可选择标签
 * desc: 基本标签的用法，可以通过添加 closable 变为可关闭标签。可关闭标签具有 onClose 事件。
 */
import React from 'react';
import { FcTag } from '@ngfed/fc-components';
const { CheckableTag } = FcTag;
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
class HotTags extends React.Component {
  state = {
    selectedTags: ['Books'],
  };

  handleChange(tag, checked) {
    const { selectedTags } = this.state;
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    this.setState({ selectedTags: nextSelectedTags });
  }

  render() {
    const { selectedTags } = this.state;
    return (
      <>
        <span style={{ marginRight: 8 }}>Categories:</span>
        {tagsData.map((tag) => (
          <CheckableTag
            key={tag}
            checked={selectedTags.indexOf(tag) > -1}
            onChange={(checked) => this.handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
      </>
    );
  }
}

export default HotTags;

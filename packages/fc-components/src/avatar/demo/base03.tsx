/**
 * title: 自动调整字符大小
 * desc: 对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。也可使用 gap 来设置字符距离左右两侧边界单位像素。
 */

import React from 'react';
import { FcAvatar, FcButton } from '@ngfed/fc-components';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];
const GapList = [4, 3, 2, 1];

class Autoset extends React.Component {
  state = {
    user: UserList[0],
    color: ColorList[0],
    gap: GapList[0],
  };

  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0],
    });
  };

  changeGap = () => {
    const index = GapList.indexOf(this.state.gap);
    this.setState({
      gap: index < GapList.length - 1 ? GapList[index + 1] : GapList[0],
    });
  };
  render() {
    return (
      <>
        <FcAvatar
          style={{
            backgroundColor: this.state.color,
            verticalAlign: 'middle',
          }}
          size="large"
          gap={this.state.gap}
        >
          {this.state.user}
        </FcAvatar>
        <FcButton
          size="small"
          style={{
            margin: '0 16px',
            verticalAlign: 'middle',
          }}
          onClick={this.changeUser}
        >
          ChangeUser
        </FcButton>
        <FcButton
          size="small"
          style={{
            verticalAlign: 'middle',
          }}
          onClick={this.changeGap}
        >
          changeGap
        </FcButton>
      </>
    );
  }
}

export default Autoset;

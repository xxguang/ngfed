/**
 * title: 带 icon 的滑块
 * desc: 滑块左右可以设置图标来表达业务含义。
 */

import { FcSlider } from '@ngfed/fc-components';
import { FrownOutlined, SmileOutlined } from '@ant-design/icons';

import './base03.css';

export default class IconSlider extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
        <FrownOutlined className={preColorCls} />
        <FcSlider {...this.props} onChange={this.handleChange} value={value} />
        <SmileOutlined className={nextColorCls} />
      </div>
    );
  }
}

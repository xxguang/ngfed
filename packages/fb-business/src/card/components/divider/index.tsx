import React, { useContext } from 'react';
import { ConfigProvider } from 'antd';
import classNames from 'classnames';

import './index.less';

export type FbCardDividerProps = {
  style?: React.CSSProperties;
  className?: string;
  type?: 'horizontal' | 'vertical';
};

const FbCardDivider: React.FC<FbCardDividerProps> = (props) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('', 'fb-card-divider');

  const { className, style = {}, type } = props;
  const classString = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
  });
  return <div className={classString} style={style}></div>;
};

export default FbCardDivider;

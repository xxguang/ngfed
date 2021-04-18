import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import { Omit, tuple } from 'antd/es/_util/type';
import devWarning from 'antd/es/_util/devWarning';

import { ConfigProvider } from 'antd';
import SizeContext, { SizeType } from 'antd/es/config-provider/SizeContext';
import TouchFeedback from 'rmc-feedback';

import './style/index';

const ConfigContext = ConfigProvider.ConfigContext;
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<FeedBackProps & React.RefAttributes<HTMLElement>> {
  __NGFED_FEEDBACK: boolean;
}

// 定义类型
const FeedBackColors = tuple('red', 'green', 'blue', 'black');
export type FeedBackColor = typeof FeedBackColors[number];

const FeedBackShapes = tuple('circle', 'round');
export type FeedBackShape = typeof FeedBackShapes[number];

// 定义组件的属性
export interface FeedBackProps {
  prefixCls?: string;
  color?: FeedBackColor;
  shape?: FeedBackShape;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const InternalFeedback: React.ForwardRefRenderFunction<unknown, FeedBackProps> = (props, ref) => {
  // 获取props
  const { prefixCls: customizePrefixCls, color, shape = 'round', className, ...rest } = props;

  // 获取context
  const config = useContext(ConfigContext);

  // 获取ref
  const feedBackRef = (ref as any) || React.createRef<HTMLElement>();

  // 事件
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;
    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  const { getPrefixCls, autoInsertSpaceInButton, direction } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('fb-fed', customizePrefixCls);
  const activeStyle = { color: color };

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${color}`]: color,
      [`${prefixCls}-${shape}`]: shape,
    },
    className,
  );

  const feedback = (
    <TouchFeedback {...props} activeClassName={classes} activeStyle={activeStyle}>
      <span ref={feedBackRef} style={{ padding: '20px' }} onClick={handleClick}>
        {props.children}
      </span>
    </TouchFeedback>
  );
  return feedback;
};

const Feedback = React.forwardRef<unknown, FeedBackProps>(InternalFeedback) as CompoundedComponent;
Feedback.displayName = 'Feedback';
Feedback.__NGFED_FEEDBACK = true;

export default Feedback;

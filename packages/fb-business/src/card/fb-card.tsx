import type { PropsWithChildren, ReactNode } from 'react';
import React, { useContext } from 'react';
import type { TabPaneProps } from 'antd';
import TabPane from './components/tab-pane/index';
import Divider from './components/divider/index';
import Actions from './components/actions';
import CardLoading from './components/card-loading';
import { Grid, Tabs, ConfigProvider } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import useMergedState from 'rc-util/lib/hooks/useMergedState';
import classNames from 'classnames';
import omit from 'rc-util/lib/omit';
import './style/index.less';

const { useBreakpoint } = Grid;

// 栅格数据约束
type ColSpanType = number | string;
export type Breakpoint = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';
export type Gutter = number | Partial<Record<Breakpoint, number>>;

export type FcCardTabsProps = {} & TabPaneProps;

// Card 接受的Props属性
export type FbCardProps = {
  headStyle?: React.CSSProperties; // 头部样式
  bodyStyle?: React.CSSProperties; // 内容样式
  headerBordered?: boolean; // 是否有边框
  title?: React.ReactNode; // 标题
  subTitle?: React.ReactNode;
  tooltip?: string;
  tip?: string;
  extra?: React.ReactNode;
  layout?: 'default' | 'center';
  type?: 'default' | 'inner'; //卡片类型
  direction?: 'column' | 'row'; //嵌套卡片时候flex方向
  size?: 'default' | 'small';
  loading?: boolean | ReactNode;
  colSpan?: ColSpanType | Partial<Record<Breakpoint, ColSpanType>>; // 栅格取值： 12, '12'  或者  { xs:12, sm:6 }
  gutter?: Gutter | Gutter[];
  actions?: React.ReactNode[]; //操作按钮
  split?: 'vertical' | 'horizontal'; //卡片拆分方式
  bordered?: boolean;
  hoverable?: boolean; //鼠标移过时候浮起
  ghost?: boolean;
  collapsible?: boolean; //是否可折叠
  collapsed?: boolean; //受控折叠
  defaultCollapsed?: boolean; //配置默认折叠
  onCollapse?: (collapsed: boolean) => void;
  tabs?: TabPaneProps;
  prefixCls?: string;
} & Omit<React.HtmlHTMLAttributes<HTMLDivElement>, 'title'>;

// Card 需要的子组件，和其他API
type FbCardType = {
  isFbCard: boolean;
  TabPane: typeof TabPane;
  Divider: typeof Divider;
  Group: typeof Group;
} & React.ForwardRefExoticComponent<FbCardProps>;

// 嵌套的子Card
type FbCardChildType = React.ReactElement<FbCardProps, any>;

// @ts-ignore
const FbCard: FbCardType = React.forwardRef<HTMLDivElement>((props: FbCardProps, ref) => {
  // 1. 结构属性
  const {
    className,
    style,
    bodyStyle = {},
    headStyle = {},
    title,
    subTitle,
    extra,
    tip,
    layout,
    loading,
    colSpan,
    gutter = 0,
    tooltip,
    split,
    headerBordered,
    bordered,
    children,
    size,
    actions,
    ghost = false,
    hoverable = false,
    direction,
    collapsed: controlCollapsed,
    collapsible = false,
    defaultCollapsed = false,
    onCollapse,
    tabs,
    type,
    ...rest
  } = props;

  // 2. context
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const screens = useBreakpoint();

  // 绑定collapsed的修改函数
  const [collapsed, setCollapsed] = useMergedState<boolean>(defaultCollapsed, {
    value: controlCollapsed,
    onChange: onCollapse,
  });

  const responsiveArray: Breakpoint[] = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'];

  // 根据响应式获取 gutter, 把响应代码转数组
  const getNormalizedGutter = (gut: Gutter | Gutter[]) => {
    const results: [number, number] = [0, 0];
    const normalizedGutter = Array.isArray(gut) ? gut : [gut, 0];
    normalizedGutter.forEach((g, index) => {
      if (typeof g === 'object') {
        for (let i = 0; i < responsiveArray.length; i += 1) {
          const breakpoint: Breakpoint = responsiveArray[i];
          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint] as number;
            break;
          }
        }
      } else {
        return (results[index] = g | 0);
      }
    });
    return results;
  };

  // 根据条件返回style
  const getStyle = (withStyle: boolean, appendStyle: React.CSSProperties) => {
    return withStyle ? appendStyle : {};
  };

  const prefixCls = getPrefixCls('pro-card');
  const normalizedGutter = getNormalizedGutter(gutter);

  // 判断是否嵌套了卡片，如果套了将自身卡片内容padding设为0
  let containFbCard;
  const childrenArray = React.Children.toArray(children) as FbCardChildType[];
  const childrenModified = childrenArray.map((element, index) => {
    if (element?.type?.isFbCard) {
      containFbCard = true;
      // 右侧间隙
      const gutterRightStyle = getStyle(
        normalizedGutter[0]! > 0 && index !== childrenArray.length - 1,
        {
          marginRight: normalizedGutter[0],
        },
      );
      // 下方间隙
      const gutterBottomStyle = getStyle(normalizedGutter[1]! > 0, {
        marginRight: normalizedGutter[0],
      });
      // 当split 有值时候，内部卡片radius设置0
      const splitStyle = getStyle(split === 'vertical' || split === 'horizontal', {
        borderRadius: 0,
      });

      return React.cloneElement(element, {
        className: classNames(element.props.className, {
          [`${prefixCls}-split-vertical`]:
            split === 'vertical' && index !== childrenArray.length - 1,
          [`${prefixCls}-split-horizontal`]:
            split === 'horizontal' && index !== childrenArray.length - 1,
        }),
        style: {
          ...gutterRightStyle,
          ...gutterBottomStyle,
          ...splitStyle,
          ...element.props.style,
        },
      });
    }
    return element;
  });

  let span = colSpan;
  // colSpan 响应式
  if (typeof colSpan === 'object') {
    for (let i = 0; i < responsiveArray.length; i += 1) {
      const breakpoint: Breakpoint = responsiveArray[i];
      if (screens[breakpoint] && colSpan[breakpoint]) {
        span = colSpan[breakpoint];
        break;
      }
    }
  }
  // 当colSpan 为30% 或300px时候
  const colSpanStyle = getStyle(typeof span === 'string' && /\d%|\dpx/i.test(span), {
    width: span as string,
    flexShrink: 0,
  });

  const cardStyle = {
    ...colSpanStyle,
    ...style,
  };

  const cardCls = classNames(`${prefixCls}`, className, {
    [`${prefixCls}-span-${span}`]: typeof span === 'number' && span >= 0 && span <= 24,
    [`${prefixCls}-border`]: bordered,
    [`${prefixCls}-contain-card`]: containFbCard,
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-split`]: split === 'vertical' || split == 'horizontal',
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-hoverable`]: ghost,
    [`${prefixCls}-size-${size}`]: size,
    [`${prefixCls}-type-${type}`]: type,
    [`${prefixCls}-collapse`]: collapsed,
  });

  const headerCls = classNames(`${prefixCls}-header`, {
    [`${prefixCls}-header-border`]: headerBordered || type == 'inner',
  });

  const bodyCls = classNames(`${prefixCls}-body`, {
    [`${prefixCls}-body-center`]: layout === 'center',
    [`${prefixCls}-body-column`]: split === 'horizontal' || direction === 'column',
  });

  const loadingBlockStyle =
    bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? { padding: 24 } : undefined;

  const loadingDOM = React.isValidElement(loading) ? (
    loading
  ) : (
    <CardLoading prefix={prefixCls} style={loadingBlockStyle} />
  );

  const collapsibleButton = collapsible && controlCollapsed == undefined && (
    <RightOutlined
      rotate={!collapsed ? 90 : undefined}
      className={`${prefixCls}-collapsible-icon`}
    />
  );

  const titleCls = classNames(`${prefixCls}-title`, {
    [`${prefixCls}-title-collapsible`]: collapsibleButton,
  });

  const actionDom = <Actions actions={actions} prefixCls={prefixCls} />;

  return (
    <div className={cardCls} style={cardStyle} ref={ref} {...omit(rest, ['id', 'prefixCls'])}>
      {(title || extra || collapsibleButton) && (
        <div className={headerCls} style={headStyle}>
          <div
            className={titleCls}
            onClick={() => {
              if (controlCollapsed) setCollapsed(!collapsed);
            }}
          >
            {collapsibleButton}
            <div> labelIconTip</div>
          </div>
          <div className={`${prefixCls}-extra`}> {extra} </div>
        </div>
      )}

      {tabs ? (
        <div className={`${prefixCls}-tabs`}></div>
      ) : (
        <div className={bodyCls} style={bodyStyle}>
          {loading ? loadingDOM : childrenModified}
        </div>
      )}
      {actionDom}
    </div>
  );
});

// FbCard.Group
const Group = (props: PropsWithChildren<FbCardProps>) => (
  <FbCard bodyStyle={{ padding: 0 }} {...props} />
);

FbCard.isFbCard = true;
FbCard.TabPane = TabPane;
FbCard.Divider = Divider;
FbCard.Group = Group;

FbCard.displayName = 'FbCard';
export default FbCard;

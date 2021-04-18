import React, { useContext } from 'react';
import type { TabPaneProps } from 'antd';
import { ConfigProvider, Tabs } from 'antd';
import type { FbCardProps } from '../../index';
import classNames from 'classnames';
import FbCard from '../../index';

import './index.less';

export type FbCardTabPaneProps = {
  key?: string;
  cardProps?: FbCardProps;
} & TabPaneProps;

const TabPane: React.FC<FbCardTabPaneProps> = (props) => {
  const {
    key,
    tab,
    tabKey,
    disabled,
    destroyInactiveTabPane,
    children,
    className,
    style,
    cardProps,
    ...rest
  } = props;

  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('', 'fb-card-tabpane');
  const tabPaneClassName = classNames(prefixCls, className);
  return (
    <Tabs.TabPane
      key={key}
      tabKey={tabKey}
      tab={tab}
      className={tabPaneClassName}
      style={style}
      disabled={disabled}
      destroyInactiveTabPane={destroyInactiveTabPane}
      {...rest}
    >
      <FbCard {...cardProps}> {children} </FbCard>
    </Tabs.TabPane>
  );
};

export default TabPane;

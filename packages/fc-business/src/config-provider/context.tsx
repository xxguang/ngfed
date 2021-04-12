import * as React from 'react';

// 全局配置属性约束
export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

// 获取默认样式前缀-suffixCls
const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `fb-${suffixCls}` : 'fb';
};

// 全局配置Context
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

// 全局配置Consumer
export const ConfigConsumer = ConfigContext.Consumer;

import * as React from 'react';

// 用户自定义全局配置属性
export interface ConfigConsumerProps {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
}

// 获取默认样式前缀-suffixCls
const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `fc-${suffixCls}` : 'fc';
};

// 创建上下文全局配置
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

// 上下文消费者
export const ConfigConsumer = ConfigContext.Consumer;

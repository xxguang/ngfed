import React, { useContext } from 'react';
import { ConfigProvider as AntdConfigProvider, ConfigProvider } from 'antd';

export type ConfigContextPropsType = {
  isMyContext: boolean;
  prefixCls: string;
};

const ConfigContext = React.createContext<ConfigContextPropsType>({
  isMyContext: true,
  prefixCls: 'fb',
});

const ConfigProviderWrap: React.FC<Record<string, unknown>> = ({ children }) => {
  const { locale } = useContext(AntdConfigProvider.ConfigContext);
  const Provider = locale === undefined ? AntdConfigProvider : React.Fragment;

  return (
    <ConfigConsumer>
      {(value) => {
        const configProvider = {};
        return (
          <Provider {...configProvider}>
            <ConfigProvider
              value={{
                ...value,
              }}
            >
              {children}
            </ConfigProvider>
          </Provider>
        );
      }}
    </ConfigConsumer>
  );
};

const { Consumer: ConfigConsumer, Provider: ConfigProvider } = ConfigContext;

export { ConfigConsumer, ConfigProvider, ConfigProviderWrap };
export default ConfigContext;

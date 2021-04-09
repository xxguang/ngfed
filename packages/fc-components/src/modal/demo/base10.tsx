/**
 * title: 使用 hooks 获得上下文
 * desc: 通过 Modal.useModal 创建支持读取 context 的 contextHolder。
 */
import React from 'react';
import { FcButton, FcSpace, FcModal } from '@ngfed/fc-components';

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const config = {
  title: 'Use Hook!',
  content: (
    <>
      <ReachableContext.Consumer>{(name) => `Reachable: ${name}!`}</ReachableContext.Consumer>
      <br />
      <UnreachableContext.Consumer>{(name) => `Unreachable: ${name}!`}</UnreachableContext.Consumer>
    </>
  ),
};

const App = () => {
  const [modal, contextHolder] = FcModal.useModal();

  return (
    <ReachableContext.Provider value="Light">
      <FcSpace>
        <FcButton
          onClick={() => {
            modal.confirm(config);
          }}
        >
          Confirm
        </FcButton>
        <FcButton
          onClick={() => {
            modal.warning(config);
          }}
        >
          Warning
        </FcButton>
        <FcButton
          onClick={() => {
            modal.info(config);
          }}
        >
          Info
        </FcButton>
        <FcButton
          onClick={() => {
            modal.error(config);
          }}
        >
          Error
        </FcButton>
      </FcSpace>
      {/* `contextHolder` should always under the context you want to access */}
      {contextHolder}

      {/* Can not access this context since `contextHolder` is not in it */}
      <UnreachableContext.Provider value="Bamboo" />
    </ReachableContext.Provider>
  );
};

export default () => {
  return (
    <>
      <App />
    </>
  );
};

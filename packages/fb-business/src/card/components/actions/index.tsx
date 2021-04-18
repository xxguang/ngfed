import React from 'react';
import './index.less';

export type FbCardActionsProps = {
  prefixCls?: string;
  actions?: React.ReactNode[];
};

const FbCardActions: React.FC<FbCardActionsProps> = (props) => {
  const { actions, prefixCls } = props;
  return actions && FbCardActions.length ? (
    <ul className={`${prefixCls}-actions`}>
      {actions.map((action, index) => {
        return (
          <li style={{ width: `${100 / actions.length} %` }} key={`action-${index}`}>
            <span>{action}</span>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default FbCardActions;

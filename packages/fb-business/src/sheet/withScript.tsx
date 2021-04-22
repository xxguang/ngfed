import React from 'react';
import Script from 'react-load-script';

import './components/dist/plugins/css/pluginsCss.css';
import './components/dist/plugins/plugins.css';
import './components/dist/css/luckysheet.css';
import './components/dist/assets/iconfont/iconfont.css';

const withScript = (WrappedComponent) =>
  class WithScript extends React.Component<{}, { scriptLoaded1: boolean; scriptLoaded2: boolean }> {
    constructor(props) {
      super(props);
      this.state = {
        scriptLoaded1: false,
        scriptLoaded2: false,
      };
    }
    handleScriptLoad1() {
      this.setState({ scriptLoaded1: true });
    }
    handleScriptLoad2() {
      this.setState({ scriptLoaded2: true });
    }
    public render() {
      const { scriptLoaded1, scriptLoaded2 } = this.state;
      return (
        <>
          <Script
            url="https://cdn.jsdelivr.net/npm/luckysheet/dist/plugins/js/plugin.js"
            onLoad={this.handleScriptLoad1.bind(this)}
          />
          <Script
            url="https://cdn.jsdelivr.net/npm/luckysheet/dist/luckysheet.umd.js"
            onLoad={this.handleScriptLoad2.bind(this)}
          />
          {scriptLoaded1 && scriptLoaded2 ? (
            <WrappedComponent scriptLoaded={true} {...this.props} />
          ) : null}
        </>
      );
    }
  };

export default withScript;

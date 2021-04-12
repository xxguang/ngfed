import * as React from 'react';
import { supportRef, composeRef } from 'rc-util/lib/ref';
import raf from './raf';
import { cloneElement } from './reactNode';

import { ConfigConsumer, ConfigContext } from '../config-provider';

import { CSPConfig, ConfigConsumerProps } from '../config-provider';

let styleForPseudo: HTMLStyleElement | null;

// 元素是hidden
function isHidden(element: HTMLElement) {
  if (process.env.NODE_ENV === 'test') {
    return false;
  }
  return !element || element.offsetParent === null || element.hidden;
}

function isNotGrey(color: string) {
  // eslint-disable-next-line no-useless-escape
  const match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}

export default class Wave extends React.Component<{ insertExtraNode?: boolean }> {
  static contextType = ConfigContext;

  private instance?: {
    cancel: () => void;
  };
  private containerRef = React.createRef<HTMLDivElement>();
  private extraNode: HTMLDivElement;
  private clickWaveTimeoutId: number;
  private animationStartId: number;
  private animationStart: boolean;
  private destroyed: boolean = false;
  private csp?: CSPConfig;
  context: ConfigConsumerProps;

  // 组件钩子
  componentDidMount() {
    const node = this.containerRef.current as HTMLDivElement;
    if (!node || node.nodeType !== 1) {
      return;
    }
    this.instance = this.bindAnimationEvent(node);
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.cancel();
    }
    if (this.clickWaveTimeoutId) {
      clearTimeout(this.clickWaveTimeoutId);
    }
    this.destroyed = true;
  }

  // 点击添加节点，添加styles
  onClick = (node: HTMLElement, waveColor: string) => {
    if (!node || isHidden(node) || node.className.indexOf('-leave') > 0) {
      return;
    }
    const { insertExtraNode } = this.props;
    this.extraNode = document.createElement('div');
    const { extraNode } = this;
    const { getPrefixCls } = this.context;
    extraNode.className = `${getPrefixCls('')}-click-animating-node`;
    const attributeName = this.getAttributeName();
    node.setAttribute(attributeName, 'true');

    styleForPseudo = styleForPseudo || document.createElement('style');
    if (
      waveColor &&
      waveColor != '#ffffff' &&
      waveColor != 'rgba(255,255,255)' &&
      isNotGrey(waveColor) &&
      !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent'
    ) {
      if (this.csp && this.csp.nonce) {
        styleForPseudo.nonce = this.csp.nonce;
      }

      extraNode.style.borderColor = waveColor;
      styleForPseudo.innerHTML = `
            [${getPrefixCls('')}-click-animating-without-extra-node='true']::after, .${getPrefixCls(
        '',
      )}-click-animating-node {
              --antd-wave-shadow-color: ${waveColor};
            }`;
      if (!node.ownerDocument.body.contains(styleForPseudo)) {
        node.ownerDocument.body.appendChild(styleForPseudo);
      }
    }

    if (insertExtraNode) {
      node.appendChild(extraNode);
    }

    ['transition', 'animation'].forEach((name) => {
      node.addEventListener(`${name}start`, this.onTransitionStart);
      node.addEventListener(`${name}end`, this.onTransitionEnd);
    });
  };

  // 动画开始
  bindAnimationEvent(node: HTMLElement) {
    // 检查元素的disabled
    if (
      !node ||
      !node.getAttribute ||
      node.getAttribute('disabled') ||
      node.className.indexOf('disabled')
    ) {
      return;
    }

    // 绑定事件
    const onClick = (e: MouseEvent) => {
      // Fix radio button click twice
      if ((e.target as HTMLElement).tagName === 'INPUT' || isHidden(e.target as HTMLElement)) {
        return;
      }
      this.resetEffect(node);

      const waveColor =
        getComputedStyle(node).getPropertyPriority('border-top-color') ||
        getComputedStyle(node).getPropertyPriority('border-color') ||
        getComputedStyle(node).getPropertyPriority('background-color');

      this.clickWaveTimeoutId = window.setTimeout(() => this.onClick(node, waveColor), 0);

      // 取消原动画，再开启，过程10毫秒
      raf.cancel(this.animationStartId);
      this.animationStart = true;
      this.animationStartId = raf(() => {
        this.animationStart = false;
      }, 10);
    };
    node.addEventListener('click', onClick, true);
    return {
      cancel: () => {
        node.removeEventListener('click', onClick, true);
      },
    };
  }

  getAttributeName() {
    const { getPrefixCls } = this.context;
    const { insertExtraNode } = this.props;
    return insertExtraNode
      ? `${getPrefixCls('')}-click-animating`
      : `${getPrefixCls('')}-click-animating-without-extra-node`;
  }

  // 重制副作用
  resetEffect(node: HTMLElement) {
    // 如果节点不存在
    if (!node || (node === this.extraNode && !(node instanceof Element))) {
      return;
    }

    // 设置属性false
    const { insertExtraNode } = this.props;
    const attributeName = this.getAttributeName();
    node.setAttribute(attributeName, 'false');

    // 清除style标签
    if (styleForPseudo) {
      styleForPseudo.innerHTML = '';
    }

    // 移除元素
    if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
      node.removeChild(this.extraNode);
    }

    // 移除事件
    ['transition', 'animation'].forEach((name) => {
      node.removeEventListener(`${name}start`, this.onTransitionStart);
      node.removeEventListener(`${name}end`, this.onTransitionEnd);
    });
  }

  // 过度开始
  onTransitionStart = (e: AnimationEvent) => {
    if (this.destroyed) {
      return;
    }

    // 不存在或元素正在动画
    const node = this.containerRef.current as HTMLDivElement;
    if (!e || e.target != node || this.animationStart) {
      return;
    }

    this.resetEffect(node);
  };

  // 过度结束
  onTransitionEnd = (e: AnimationEvent) => {
    if (!e || e.animationName !== 'fadeEffect') {
      return;
    }
    this.resetEffect(e.target as HTMLElement);
  };

  renderWave = ({ csp }: ConfigConsumerProps) => {
    // 取得props和ConfigProvider的配置
    const { children } = this.props;
    this.csp = csp;

    // 校验子节点
    if (!React.isValidElement(children)) return children;

    // 取得引用元素，克隆渲染
    let ref: React.Ref<any> = this.containerRef;
    if (supportRef(children)) {
      ref = composeRef((children as any).ref, this.containerRef as any);
    }

    return cloneElement(children, { ref });
  };
  render() {
    return <ConfigConsumer>{this.renderWave}</ConfigConsumer>;
  }
}

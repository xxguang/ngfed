export default {
  // ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: '@alifd/next',
        style: false,
      },
      'fusion',
    ],
  ],
  mode: 'site',
  title: 'ahooks',
  favicon: '/logo.jpg',
  logo: '/logo.jpg',
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  resolve: {
    includes: ['docs', 'packages/fc-components/src', 'packages/fb-business/src'],
  },
  links: [
    {
      rel: 'stylesheet',
      href: 'https://unpkg.com/@alifd/theme-design-pro@0.6.2/dist/next-noreset.min.css',
    },
    { rel: 'stylesheet', href: '/style.css' },
  ],
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'zh-CN': [
      null,
      // {
      //   title: '生态',
      //   children: [
      //     {
      //       title: 'useTable',
      //       path: 'https://usetable-ahooks.js.org/',
      //     },
      //   ],
      // },
      // { title: 'v1.x', path: 'http://hooks.umijs.org/' },
      // { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
      { title: '更新日志', path: 'https://github.com/alibaba/hooks/releases' },
      // { title: '国内镜像', path: 'https://ahooks.gitee.io/zh-CN' },
    ],
    'en-US': [
      null,
      // {
      //   title: 'Ecosystem',
      //   children: [
      //     {
      //       title: 'useTable',
      //       path: 'https://usetable-ahooks.js.org/',
      //     },
      //   ],
      // },
      // { title: 'v1.x', path: 'http://hooks.umijs.org/' },
      // { title: 'GitHub', path: 'https://github.com/alibaba/hooks' },
      { title: 'Changelog', path: 'https://github.com/alibaba/hooks/releases' },
      // { title: '国内镜像', path: 'https://ahooks.gitee.io/zh-CN' },
    ],
  },
  headScripts: ['https://s4.cnzz.com/z_stat.php?id=1278992092&web_id=1278992092'],
};

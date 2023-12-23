import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'ZilaWS',
  tagline: 'A blazingly fast websocket library with async waiters',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://zilaws.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zilaws', // Usually your GitHub org/user name.
  projectName: 'zilaws', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ZilaWS/docs/blob/main/',
          lastVersion: "2.0.x"
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        indexPages: true
      } satisfies Partial<import("@easyops-cn/docusaurus-search-local").PluginOptions>,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    announcementBar: {
      backgroundColor: "#a84300",
      content: " <a href=\"/docs/next/changelog\">Check what's in 2.0.0!</a>",
      isCloseable: true,
      textColor: "white"
    },
    metadata: [
      {
        name: "keywords",
        content: "websocket, library, waiter, async, client, server, typescript, javascript, connection, eventhandler, tcp, realtime, browser, node, events, fast"
      }
    ],
    image: 'img/logo.png',
    navbar: {
      title: 'ZilaWS',
      logo: {
        alt: 'ZilaWS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/ZilaWS',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Client API',
              to: '/docs/client-api/connecting'
            },
            {
              label: 'Server API',
              to: '/docs/server-api/starting-the-server',
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "License",
              to: 'license'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ZilaWS',
            },
          ],
        },
      ],
      copyright: `Code is licensed under <a href="/license">MIT</a><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Documentation is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>Built with Docusaurus.  `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

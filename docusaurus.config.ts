import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import dotenv from 'dotenv';
dotenv.config();

const config: Config = {
  title: 'ZilaWS',
  tagline: 'A blazingly fast websocket library with async capabilites',
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
          lastVersion: "2.2.x"
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
    [
      require.resolve("./clarity.ts"),
      {
        projectId: process.env.CLARITY_PROJECT_ID
      }
    ]
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    announcementBar: {
      backgroundColor: "#5865F2",
      content: `We've made a <a href="https://discord.gg/Bcwsuz96bb" style="font-style: italic;">Discord server</a>!`,
      isCloseable: true,
      textColor: "white"
    },
    metadata: [
      {
        name: "keywords",
        content: "zila, ws, websocket, library, waiter, async, client, server, typescript, javascript, connection, eventhandler, tcp, realtime, browser, node, events, fast"
      },
      {
        name: "og:image:width",
        content: "128"
      },
      {
        name: "og:image:height",
        content: "128"
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
          position: 'right',
          'aria-label': 'Discord Invite',
          className: "navbar--discord-link",
          href: 'https://discord.gg/Bcwsuz96bb'
        },
        {
          href: 'https://github.com/ZilaWS',
          position: 'right',
          className: 'navbar--github-link',
          'aria-label': 'GitHub Organization'
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
            },
            {
              html: `<a class="footer__link-item" href="/privacy-statement.pdf" target="_blank" rel="noopener noreferrer">Privacy</a>`
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Bcwsuz96bb'
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ZilaWS',
            }
          ],
        },
      ],
      copyright: `Code is licensed under <a href="/license">MIT</a><p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Documentation is licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY 4.0<img alt="Creative Commons icon" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="/img/creative-commons.svg"><img alt="Creative Commons icon" style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="/img/by.svg"></a></p>Built with Docusaurus.  `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fulger',
  tagline: 'Payment solutions for the new bitcoin age',
  favicon: 'img/fulger-logo.png',

  // Set the production url of your site here
  url: 'https://fulger.kangu.ro',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kangu', // Usually your GitHub org/user name.
  projectName: 'fulger', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: ['docusaurus-plugin-goatcounter'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      goatcounter: {
        code: 'fulger',
      },
      navbar: {
        title: 'Fulger',
        logo: {
          alt: 'Fulger Logo',
          src: 'img/fulger-logo.png',
        },
        items: [
          {
            href: 'https://github.com/kangu/fulger-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'NOSTR',
                href: '/',
              },
              {
                label: 'Stacker News',
                href: '/',
              },
              {
                label: 'Twitter',
                href: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main GitHub repo',
                href: 'https://github.com/kangu/fulger',
              },
              {
                label: 'Sources for this website',
                href: 'https://github.com/kangu/fulger-docs',
              },
            ],
          },
        ],
        copyright: `❤️ ${new Date().getFullYear()} Kangu Studio`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

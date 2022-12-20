// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'dApploy',
  tagline: 'Documentation and Tutorials for dApploy',
  url: 'https://github.com',
  baseUrl: '/docs/',
  baseUrlIssueBanner: false, // Defaults to `true`
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/dapploy_favicon.ico',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dApployxyz', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.git 

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  scripts: [
    'scripts/intercom-app.js',
    'scripts/intercom-scripts.js'
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en','fr', 'es','tl','hi','ar'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      fr: {
        label: 'Français',
        direction: 'ltr',
        htmlLang: 'fr',
        calendar: 'gregory',
        path: 'fr',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
        htmlLang: 'es-013',
        calendar: 'gregory',
        path: 'es',
      },
      tl: {
        label: 'Tagalog',
        direction: 'ltr',
        htmlLang: 'tl-PH',
        calendar: 'gregory',
        path: 'tl',
      },
      hi: {
        label: 'हिंदी',
        direction: 'ltr',
        htmlLang: 'hi-IN',
        calendar: 'saka',
        path: 'hi',
      },
      ar: {
        label: 'العربية',
        direction: 'rtl',
        htmlLang: 'ar',
        calendar: 'hijri ',
        path: 'ar',
      },
    }
    
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com//dApployxyz/docs/tree/main/',
        },
        blog: false,
    
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    
      algolia: {
        // The application ID provided by Algolia
        appId: 'Q4ZXUVP6ON',
  
        // Public API key: it is safe to commit it
        apiKey: '0dd957a688c6e5002f16f866fbca9995',
  
        indexName: 'dapploy',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Earn .02 BNB each time your referral address is used! 💰 <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSemnFIosVGAKc6EIzFcuxCW8lVKGFhzWWuy_nOVDzjMOxPEGA/viewform">Become an affiliate!</a>',
        backgroundColor: '#286ef6',
        textColor: '#ffffff',
        isCloseable: false,
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: 'dApploy Logo',
          src: '/img/dapploy_logo_blend_black.svg',
          srcDark: 'img/dapploy_logo_blend_white.svg',
          target: '_self',
        width: 90,
        className: 'custom-navbar-logo-class',

        },
        items: [

          {
            type: 'localeDropdown',
            position: 'left',
            className: 'icon-link language navbar__item',
            dropdownItemsAfter: [
              {
                type: 'html',
                value: '<hr style="margin: 0.3rem 0;">',
              },
              {
                href: 'https://github.com/dApployxyz/docs/issues/1',
                label: 'Help Us Translate',
              },
            
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: "https://github.com/dapployxyz",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://twitter.com/dapployxyz",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter",
          },
        ],
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
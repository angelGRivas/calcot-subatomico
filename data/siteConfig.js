module.exports = {
  siteTitle: 'Calçot Subatómico',
  siteDescription:
    'El calçot subatómico consiste en una variedad de calçot cuánticos',
  authorName: 'Ángel Rivas',
  twitterUsername: 'no',
  authorAvatar: 'nivel-atomico.png', // file in content/images
  defaultLang: 'es', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  El autor es un fan de los calçot de estructura subatómica.
  `,
  siteUrl: 'https://www.calcot-subatomico.com',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'calcot.jpg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/nivel-atomico.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: 'Calçot Subatómico',
  headerLinksIcon: 'nivel-atomico.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'Calçot',
      url: '/calcot',
    },
    {
      label: 'Subatómico',
      url: '/subatomico',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'Calçot',
          url: '/calcot',
        },
        {
          label: 'Subatómico',
          url: '/subatomico',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'Website',
          url: 'https://www.acogeauncientifico.com',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: '',
          rel: 'external',
        },
      ],
    },
  ],
}

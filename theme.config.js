export default {
  projectLink: 'https://github.com/vadiraja/gitexamples.com', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/vadiraja/gitexamples.com/blob/main', // base URL for the docs repository
  titleSuffix: ' - GQL Examples',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Avareva Tech Solutions.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <span>GQL Examples API</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="og:title" content="Nextra: the next docs builder" />
    </>
  ),
}
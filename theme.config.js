export default {
  github: 'https://github.com/enerGneer',
  docsRepositoryBase: 'https://github.com/enerGneer/wiki/tree/main',
  titleSuffix: ' – enerGneer',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">
        enerGneer WIKI
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        made with Nextra
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="ko" />
      <meta name="description" content="enerGneer - developer wiki page" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="128x128"
        href="/favicon-128x128.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
}

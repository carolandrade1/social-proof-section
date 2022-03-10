import Head from 'next/head';

export default function IndexHead() {
  const title = 'Social proof challenge';
  const url = 'https://google-clone-livid-zeta.vercel.app/';
  const image = '/image/desktop-design.jpg';
  const description = 'Social proof with Next.js and Tailwind';

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content='Google Clone made with next' />
      <link rel='icon' href='/image/favicon-32x32.png' />

      <meta name='description' content={description} />
      <meta name='author' content='Carol Andrade Santos' />
      <meta name='keywords' content='Next.js, React, Tailwind' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property='og:type' content='website' />
      <meta property='og:url' content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />

      {/* <!-- Twitter --> */}
      <meta property='twitter:card' content='summary_large_image' />
      <meta property='twitter:url' content={url} />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content={image} />
    </Head>
  );
}

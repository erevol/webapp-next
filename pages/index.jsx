import Content from '@/components/blocks/Content';
import DefaultLayout from '@/components/layout/DefaultLayout/DefaultLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>WebApp</title>
        <meta name="description" content="WebApp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DefaultLayout>
        <Content />
      </DefaultLayout>
    </>
  );
}

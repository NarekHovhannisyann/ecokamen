import Head from 'next/head';
import { Inter } from 'next/font/google';
import Layout from '@/components/features/Layout';
import HomeComponent from '@/components/pages/Home';

const inter = Inter({ subsets: ['latin'] });

export default function Main() {
  return (
    <>
      <Head>
        <title>Eco Kamen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="twitter:title" content="Ecokamen" />
        <meta
          name="twitter:description"
          content="Дикий камень"
        />
         <meta
          name="twitter:description"
          content="Dikiy kamen"
        />
      </Head>
      <Layout>
        <HomeComponent />
      </Layout>
    </>
  );
}

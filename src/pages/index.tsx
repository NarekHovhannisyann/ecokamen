import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Header from '@/components/features/Header';
import styles from '@/styles/Home.module.css';
import Home from './home';

const inter = Inter({ subsets: ['latin'] });

export default function Main() {
  return (
    <>
      <Head>
        <title>Eco Kamen</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <Home />
      </main>
    </>
  );
}
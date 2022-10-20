import React from 'react';
import Head from 'next/head';
import UnauthenticatedFooter from './Footers/UnauthenticatedFooter';
import UnauthenticatedHeader from './Headers/UnauthenticatedHeader';

type Props = {
  children: JSX.Element;
};

export const UnauthenticatedLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Outreachy</title>
        <meta
          name='description'
          content='Giving solutions to all your bug related issues on your website or application'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <UnauthenticatedHeader />
      {children}
      <UnauthenticatedFooter />
    </>
  );
};

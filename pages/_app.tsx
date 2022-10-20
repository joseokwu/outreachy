import '../styles/globals.css';
import { NextPage } from 'next';
import { ScriptProps } from 'next/script';
import type { AppProps } from 'next/app';

type Page<P = Record<string, never>> = NextPage<P> & {
  Layout: (page: ScriptProps) => JSX.Element;
};

type Props = AppProps & {
  Component: Page;
};

const Noop = ({ children }: ScriptProps) => <>{children}</>;

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout || Noop;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

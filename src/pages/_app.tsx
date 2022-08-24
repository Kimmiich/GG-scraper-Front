import { globalStyles } from '../../stitches.config';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
  globalStyles();
  return <Component {...pageProps} />;
}

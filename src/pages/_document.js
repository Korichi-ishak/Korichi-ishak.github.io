import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Ishak Korichi - Backend Developer, Data Analyst, and Node.js Expert" />
        <meta name="keywords" content="backend developer, data analyst, node.js, react, mongodb, portfolio" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
import { Html, Head, Main, NextScript } from 'next/document';
//모든페이지에 공통으로 적용되는 설정
export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

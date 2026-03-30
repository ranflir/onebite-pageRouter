import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const onClickButton = () => {
    router.push('/test');
    // replace 뒤로가기를 방지하면서 이동가능
    // back 뒤로가기
  };
  useEffect(() => {
    router.prefetch('/test');
  }, []);
  //특정페이지를 명시적으로 프리페칭 할 수도 있다

  return (
    <>
      <header>
        {/* link 태그는 기본적으로 a태그와 사용법이 같다 (preFetching 가능) */}
        <Link href={'/'}>Index</Link>
        &nbsp;
        <Link href={'/search'} prefetch={false}>
          Search
        </Link>
        {/* 자주 접속할것 같지 않아 프리패치 해제 */}
        &nbsp;
        <Link href={'/book/1'}>Book/1</Link>
        <div>
          <button onClick={onClickButton}> /test page로 이동</button>
        </div>
      </header>

      <Component {...pageProps} />
    </>
  );
}

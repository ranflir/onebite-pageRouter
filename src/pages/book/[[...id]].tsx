import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Book {id}</h1>;
}

//모든경로를 다 대응하겠다. [...id].tsx  : catch all segment(구간)
// index페이지 역할까지 대응. [[...id]] : optional Catch all segment
//
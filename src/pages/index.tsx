// CSS Module
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import fetchBooks from '@/lib/fetch-books';
import fetchRandomBooks from '@/lib/fetch-random-books';

//서버사이드 방식으로 랜더링 된다 (ssr) 이것만하면?!
//컴포넌트보다 먼저 실행되어서, 컴포넌트에 필요한 데이터 불러오는 함수
export const getServerSideProps = async () => {
  //  이 함수는 서버측에서만 한번 실행됨

  /*
직력로 불러옴
const allBooks = await fetchBooks();
  const recoBooks = await fetchRandomBooks();
*/

  const [allBooks, recoBooks] = await Promise.all([
    fetchBooks,
    fetchRandomBooks,
  ]); //promise.all : 모든 비동기함수를 동시에 실행

  return {
    props: { allBooks, recoBooks },
  };
};
export default function Home({
  allBooks,
  recoBooks,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {recoBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {allBooks.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

/*
기존 React App 에서의 데이터 페칭  : 초기 접속 요청부터 데이터 로딩까지 오랜 시간이 걸림

export default function Page(){
const [state, setState] = useState()  1. 불러온 데이터를 보관할 State 생성

const fetchData = async ()=>{
const response = await fetch('...')   2. 데이터 페칭 함수 생성
const data = await response.json();

setState(data);
};

useEffect(()=> {                      3. 컴포넌트 마우트 시점에 fetchData 호출 (! 데이터 요청 자체가 늦다)
fetchData();
}, []);

if (!state) return "Loading ...";     4. 데이터 로딩중일때의 예외처리

return <div>...</div>;
}

*/

/*
리액트 앱의 데이터 페칭
컴포넌트 마운트 이후에 발생함
데이터 요청 시점이 느려지게 되는 단점 발생

넥스트 앱의 데이터 페칭
사전 렌더링중 발생함 (당연히 컴포넌트 마운트 이후에도 발생 가능)
데이터 요청 시점이 매우 빨라지는 장점 있음
*/

// CSS Module
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css';
import { ReactNode } from 'react';
import books from '@/mock/books.json';
import BookItem from '@/components/book-item';

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        {books.map((book) => (
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
React App 에서의 데이터 페칭

export default function Page(){
const [state, setState] = useState()  1. 불러온 데이터를 보관할 State 생성

const fetchData = async ()=>{
const response = await fetch('...')   2. 데이터 페칭 함수 생성
const data = await response.json();

setState(data);
};

useEffect(()=> {                      3. 컴포넌트 마우트 시점에 fetchData 호출
fetchData();
}, []);

return <div>...</div>;
}

*/

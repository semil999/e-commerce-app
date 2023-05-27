import HeadComponet from '@/Components/HeadComponet'
import { useEffect } from 'react';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3001/products');
  const repo = await res.json();
  return { props: { repo } };
};

export default function Home({repo}) {
  useEffect(() => {
    console.log(repo)
  }, [])
  
  return (
    <>
      <HeadComponet title={'Home'}/>
      <div>
        {
          repo?.map((x,i) => {
            return <div key={i}>
              <h3>{x.title}</h3>
              <p>{x.exploreTitle}</p>
            </div>
          })
        }
      </div>
    </>
  )
}

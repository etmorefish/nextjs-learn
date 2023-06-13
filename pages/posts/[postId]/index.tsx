import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RouterButton from '@/components/RouterButton';
const details = () => {
    const router = useRouter()
    const id = router.query.postId;

    const [data, setData] = useState<any[]>([]);
    const [dt, setDt] = useState("");

    const fetchData = () => {
      if (!id){
        return;
      }
      fetch(`https://dummyjson.com/posts/${id}`)
        .then((response) => {
          return response.json();
        })
        .then((reply) => {
          console.log(reply);
          setData(reply);
          const now = new Date();
          const hours = now.getHours().toString().padStart(2, '0');
          const minutes = now.getMinutes().toString().padStart(2, '0');
          const seconds = now.getSeconds().toString().padStart(2, '0');

          const formattedTime = `${hours}:${minutes}:${seconds}`;
          setDt(formattedTime);

        });
    };

    useEffect(() => {
      fetchData();
    }, [id]);


  return (
  <main>
    <h1>Post Details Page {data.id}</h1>
    <p>{dt}</p>
    <RouterButton />
    
    <h2>{data.title}</h2>
    <text>{data.body}</text>

  </main>
  )
}

export default details
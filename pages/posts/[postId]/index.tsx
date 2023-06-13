import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
const details = () => {
    const router = useRouter()
    const id = router.query.postId;

    const [data, setData] = useState<any[]>([]);

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
          setData(reply.posts);
        });
    };

    useEffect(() => {
      fetchData();
    }, [id]);


  return (
    <main>
    <h1>{data?.title}</h1>

  </main>
  )
}

export default details
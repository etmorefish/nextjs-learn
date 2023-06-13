// import React, { useEffect, useState } from 'react'
// import { useRouter } from 'next/router'
// import RouterButton from '@/components/RouterButton';
// const details = () => {
//     const router = useRouter()
//     const id = router.query.postId;

//     const [data, setData] = useState<any[]>([]);
//     const [dt, setDt] = useState("");

//     const fetchData = () => {
//       if (!id){
//         return;
//       }
//       fetch(`https://dummyjson.com/posts/${id}`)
//         .then((response) => {
//           return response.json();
//         })
//         .then((reply) => {
//           console.log(reply);
//           setData(reply);
//           const now = new Date();
//           const hours = now.getHours().toString().padStart(2, '0');
//           const minutes = now.getMinutes().toString().padStart(2, '0');
//           const seconds = now.getSeconds().toString().padStart(2, '0');
//           const formattedTime = `${hours}:${minutes}:${seconds}`;
//           setDt(formattedTime);

//         });
//     };

//     useEffect(() => {
//       fetchData();
//     }, [id]);

//   return (
//   <main>
//     <h1>Post Details Page {data.id}</h1>
//     <p>{dt}</p>
//     <RouterButton />
//     <h2>{data.title}</h2>
//     <text>{data.body}</text>
//   </main>
//   )
// }

// export default details;

// ------------- 生成静态页面
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import RouterButton from '@/components/RouterButton';

export default function Details(props:any) {
  const router = useRouter()

  if (router.isFallback){
      return(
    <h1>Loading</h1>
      )
  }else  return (
    <main>
      <h1>Post Details Page {props.data.id}</h1>
      <p>{props.dt}</p>
      <RouterButton />
      <h2>{props.data.title}</h2>
      <text>{props.data.body}</text>
    </main>
  )
}
export async function getStaticPaths() {
  // const paths = getAllPostIds()
  return {
    paths:[
      {params: {postId: '1'}},
      {params: {postId: '2'}}
    ],
    fallback: true
    // false  没有页面就返回404
    // ture  会
    // blocking 一定需要你有后端服务支撑, 访问 /posts 会生成所有页面
  }
}


export async function getStaticProps(context:any) {
  console.log("context: ",context)
  const id = context.params.postId;


  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data = await response.json();

  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return {
    props: {
      data,
      dt: formattedTime
    }
  }
}

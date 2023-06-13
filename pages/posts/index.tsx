// import RouterButton from "@/components/RouterButton";
// import Link from "next/link";
// import React from "react";
// import { useState, useEffect } from "react";

// const posts = () => {
//   const [dt, setDt] = useState("");
//   const [data, setData] = useState<any[]>([]);

//   const fetchData = () => {
//     fetch("https://dummyjson.com/posts")
//       .then((response) => {
//         return response.json();
//       })
//       .then((reply) => {
//         console.log(reply);
//         setData(reply.posts);
//         setDt((new Date()).toString())
//         // setDt(getCurrentTime())
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <main>
//       <h1>Posts list page</h1>
//       <h2>{dt}</h2>
//       <RouterButton />
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <h4><Link href={`posts/${item.id}`}>{item.title}</Link></h4>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// };

// export default posts;

// ------------- 构建时获取数据并生成静态页面

// 如果您想在构建时获取数据并生成静态页面，可以使用 Next.js 的 getStaticProps 静态生成函数。
// 您可以将 fetchData 函数移动到 getStaticProps 中，并从中返回数据，
// 然后将其作为 props 传递给 posts 组件。这样，Next.js 将在构建时获取数据并生成静态页面，
// 而不是在运行时获取数据。
import RouterButton from "@/components/RouterButton";
import Link from "next/link";

const Posts = (props:any) => {
  console.log("render");

  return (
    <main>
      <h1>Posts list page</h1>
      <h2>{props.dt}</h2>
      <RouterButton />
      <ul>
        {props.data.map((item:any, index: number) => (
          <li key={index}>
            <h4><Link href={`posts/${item.id}`}>{item.title}</Link></h4>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Posts;


// 这里，我们使用了 getStaticProps 函数来获取数据，将其作为 props 传递给 Posts 组件。
// 在这个函数中，我们使用了 async/await 关键字来等待数据的返回，然后将其作为 props 返回。
// 在 Posts 组件中，我们使用了这些 props 来渲染数据和当前时间。
export async function getStaticProps() {
  console.log("getStaticProps");
  const response = await fetch("https://dummyjson.com/posts");
  const data = await response.json();
  const dt = new Date().toString();

  return {
    props: {
      data: data.posts,
      dt: dt,
    },
  };
}

import RouterButton from "@/components/RouterButton";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const posts = () => {
  const [dt, setDt] = useState("");
  const [data, setData] = useState<any[]>([]);

  const fetchData = () => {
    fetch("https://dummyjson.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((reply) => {
        console.log(reply);
        setData(reply.posts);
        setDt((new Date()).toString())
        // setDt(getCurrentTime())
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <h1>Posts list page</h1>
      <h2>{dt}</h2>
      <RouterButton />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h4><Link href={`posts/${item.id}`}>{item.title}</Link></h4>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default posts;
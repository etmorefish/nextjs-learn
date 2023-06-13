import { mainModule } from "process";
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
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default posts;
function getCurrentTime(): React.SetStateAction<string> {
  throw new Error("Function not implemented.");
}


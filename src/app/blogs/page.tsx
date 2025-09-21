import React from "react";
import Container from "../../components/Container";
import Articles from "@/components/Articles";
import Link from "next/link";
import { it } from "node:test";

export interface IGetArticles {
  id: number;
  title: string;
  description: string;
  image: string;
}

async function Blogs() {
  const result = await fetch("http://localhost:3001/articles");
  const data = (await result.json()) as IGetArticles[];
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4 py-12">
        {data.map((item) => (
          <Link key={item.id} href={`/blogs/${item.id}`}>
            <Articles {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Blogs;

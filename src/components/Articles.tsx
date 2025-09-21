import { IGetArticles } from "@/app/blogs/page";
import React from "react";

function Articles({ title, description, image }: IGetArticles) {
  return (
    <div>
      <div className="shadow p-4 w-[280px]">
        <img src={image} className="rounded" />
        <h2 className="mt-3">{title}</h2>
        <p className="mt-2 text-justify line-clamp-4">{description}</p>
      </div>
    </div>
  );
}

export default Articles;

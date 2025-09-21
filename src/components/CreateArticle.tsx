"use client";

import Link from "next/link";
import { useState } from "react";

const CreateArticle = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleCreateBlog = () => {
    fetch("http://localhost:3001/articles", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000).toString(),
        title: title,
        description: description,
        image: image,
      }),
    });
  };
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Create a Blog</h2>

      <form className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Enter blog title"
            className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-900 shadow-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a short description..."
            rows={5}
            className="w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-900 shadow-sm"
          ></textarea>
        </div>

        {/* Image */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="w-full rounded border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 text-gray-900 shadow-sm"
          />
        </div>

        <Link href={"/blogs"}>
          <button
            type="submit"
            onClick={handleCreateBlog}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Publish Blog
          </button>
        </Link>
      </form>
    </div>
  );
};

export default CreateArticle;

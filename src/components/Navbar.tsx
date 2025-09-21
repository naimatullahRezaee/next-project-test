import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="shadow p-4 bg-slate-500 text-white">
      <Link href="/" className="mr-4">
        Home
      </Link>
      <Link className="mr-4" href="/blogs">
        Blogs
      </Link>
      <Link href="/create-blog">Creat Blog</Link>
    </div>
  );
};

export default Navbar;

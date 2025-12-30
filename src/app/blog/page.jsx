"use client";

import Header from "@/components/layout/Header";
import Image from "next/image";
import { blogData } from "@/Data/blogData";
import Link from "next/link";
import { useState } from "react";
import BlogDetail from "./[slug]/BlogDetail";
import { useEffect } from "react";


export default function Blog() {

    const [activePost, setActivePost] = useState(null);

        useEffect(() => {
  if (activePost) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [activePost]);
    return (
        <>
            <Header />
            <article className="blog active" data-page="blog">
                <header>
                    <h2 className="h2 article-title">Blog</h2>
                </header>

                <section className="blog-posts">
                    <ul className="blog-posts-list">
                        {blogData.map((post, index) => (
                            <li
                                className="blog-post-item  lg:w-92"
                                key={index}
                                onClick={() => setActivePost(post)}
                            >
                            <Link href={post.link} >
                                <figure className="blog-banner-box">
                                    {post.image && (
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={400}
                                            height={250}
                                            className="w-full h-auto"
                                        />
                                    )}
                                </figure>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <p className="blog-category">{post.category}</p>
                                        <span className="dot"></span>
                                        <time dateTime={post.date}>{post.displayDate}</time>
                                    </div>

                                    <h3 className="h3 blog-item-title">{post.title}</h3>

                                    <p className="blog-text">{post.excerpt}</p>
                                </div>
                            </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
            <BlogDetail
                post={activePost}
                onClose={() => setActivePost(null)}
                />
        </>
    );
}

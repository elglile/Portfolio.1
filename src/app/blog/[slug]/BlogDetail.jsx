"use client";

import Image from "next/image";

export default function BlogDetail({ post, onClose }) {
    return (
        <>
            {/* OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/60 z-[998] transition-opacity duration-300 overflow-y-auto custom-scroll
        ${post ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* BOTTOM SHEET */}
            <div
                className={`fixed inset-x-0 bottom-0 z-[999] bg-[#1e1e1f] rounded-t-2xl
        transition-transform duration-300
        ${post ? "translate-y-0" : "translate-y-full"}
        `}
            >
                {post && (
                    <div className="relative p-6 max-h-[85vh] overflow-y-auto">
                        {/* CLOSE */}
                        <button
                            className="absolute top-3 right-4 text-xl bg-gray-500/25 px-2 py-1 rounded-md hover:text-[var(--text-c-1)]"
                            onClick={onClose}
                        >
                            ✕
                        </button>

                        {/* TITLE */}
                        <h3 className="h2 mb-2">{post.title}</h3>

                        {/* META */}
                        <p className="text-sm opacity-70 mb-4">
                            {post.category} · {post.displayDate}
                        </p>

                        {/* IMAGE */}
                        <Image
                            src={post.image}
                            alt={post.title}
                            className="rounded-xl mx-auto mask-x-from-70% mask-x-to-90% w-[80%] h-96 mb-4"
                        />
                        <div className="bg-white  text-black relative max-w-3xl mx-auto -mt-14 z-10 rounded-sm shadow-lg p-6 ">
                            {/* CONTENT */}
                            <h2 className="h3 leading-relaxed whitespace-pre-line">
                                {post.excerpt}
                            </h2>
                            <div className="relative h-[300px] w-[90%] mx-auto">
                                <Image src={post.innerImage} alt={post.title} fill className="object-cover" />
                                </div>

                            <p className="leading-relaxed text-gray-700 whitespace-pre-line">
                                {post.content}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

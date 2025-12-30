"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonialsData } from "@/Data/testimonialsData";
import { assets } from "@/assets/assets";

export default function Testimonials() {
  const [active, setActive] = useState(null);
  const [closing, setClosing] = useState(false);
  const [show, setShow] = useState(false); // ⭐ جديد

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [active]);

  // trigger IN animation بعد mount
  useEffect(() => {
    if (active) {
      requestAnimationFrame(() => {
        setShow(true);
      });
    }
  }, [active]);

  const handleClick = (item) => {
    setActive(item);
    setClosing(false);
    setShow(false); // يبدأ مخفي
  };

  const closeModal = () => {
    setClosing(true);
    setShow(false); // OUT animation
    setTimeout(() => {
      setActive(null);
      setClosing(false);
    }, 300);
  };

  return (
    <>
      {/* LIST */}
      <section className="testimonials">
        <h3 className="h2 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((item, index) => (
            <li
              key={index}
              className="testimonials-item cursor-pointer"
              onClick={() => handleClick(item)}
            >
              <div className="content-card relative pt-10">
                <figure className="testimonials-avatar-box absolute -top-6 left-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                </figure>

                <h4 className="h4 testimonials-item-title mt-6">
                  {item.name}
                </h4>

                <div className="testimonials-text">
                  <p>{item.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center">
          {/* overlay */}
          <div
            className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
              show ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          />

          {/* modal */}
          <section
            className={`relative bg-[#1e1e1f] max-w-2xl w-lg mx-4 p-6 rounded-xl z-10
              transition-all duration-300
              ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 modal-close-btn"
              onClick={closeModal}
            >
              ✕
            </button>
            <div className="flex items-center justify-between gap-8 ">       
            <div className="items-center gap-4 mb-4 ">
                <div className="modal-avatar-box ">
            <Image
                src={active.avatar}
                alt={active.name}
                width={80}
                height={80}
              />
                </div>


              <Image
                src={assets.iconquote}
                alt="quote"
                width={30}
                height={30}
              />
            </div>
            <div>

            <h4 className="h2">{active.name}</h4>
            <h4 className="text-gray-300  text-xs">{active.date}</h4>

            <p className="mt-4">{active.text}</p>

            </div>
            </div>

          </section>
        </div>
      )}
    </>
  );
}

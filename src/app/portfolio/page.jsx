
"use client";

import Header from "@/components/layout/Header";
import { useState } from "react";
import Image from "next/image";
import { categories, projectsData } from "@/Data/portfolioData";
import { IoEyeOutline } from "react-icons/io5";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [animating, setAnimating] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter(
        (project) => project.category === activeCategory
      );

  const handleFilter = (category) => {
    setAnimating(true);

    setTimeout(() => {
      setActiveCategory(category);
      setAnimating(false);
    }, 200);
  };

  return (

    <div>
      <Header />
      <article className="portfolio active" data-page="portfolio">
        <header>
          <h2 className="h2 article-title">Portfolio</h2>
        </header>

        <section className="projects">
          {/* FILTER BUTTONS */}
          <ul className="filter-list">
            {categories.map((cat, index) => (
              <li className="filter-item" key={index}>
                <button
                  className={activeCategory === cat ? "active" : ""}
                  // onClick={() => setActiveCategory(cat)}
                  onClick={() => {
                    setAnimating(true);
                    setTimeout(() => {
                      setActiveCategory(cat);
                      setAnimating(false);
                    }, 200);
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* PROJECTS */}
          <ul className="project-list">
            {filteredProjects.map((project, index) => (
              // <li className="project-item active" key={index}>
              <li
                  className={`project-item active transition-all duration-300
                    ${animating ? "opacity-0 scale-95 translate-y-2" : "opacity-100 scale-100 translate-y-0"}
                  `}
                  style={{ transitionDelay: `${index * 60}ms` }}
                  key={index}
              >
                <a href={project.link}>
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <IoEyeOutline />
                    </div>

                    <Image
                      src={project.image}
                      alt={project.title}
                    // loading="lazy"
                    />
                  </figure>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}

import Header from '@/components/layout/Header'
import Clients from '@/components/sections/Clients'
import Testimonials from '@/components/sections/Testimonials'
import { aboutData } from '@/Data/aboutData'
import React from 'react'

export default function About() {
    return (
<>
  <div className="">
    <Header />
  </div>

<article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      {/* ABOUT TEXT */}
      <section className="about-text">
        {aboutData.intro.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </section>

      {/* SERVICES */}
      <section className="service  lg:w-[110%]">
        <h3 className="h2 service-title">What I'm doing</h3>

        <ul className="service-list">
  {aboutData.services.map((service, index) => (
    <li className="service-item" key={index}>
      
      {/* LOGO */}
      <div className="service-icon">
        {service.logoType === "icon" ? (
          <img
            src={service.logo.src ?? service.logo}
            alt={service.title}
            className="w-8 h-auto rounded-md object-cover m-4"
          />
        ) : (
          <img
            src={service.logo.src ?? service.logo}
            alt={service.title}
            className="w-8 h-auto rounded-md object-cover m-4"
          />
        )}
      </div>

      <h2 className="h4 service-item-title">{service.title}</h2>
      <p className="service-item-text">{service.text}</p>
    </li>
  ))}
</ul>

      </section>
      <Testimonials />
      <Clients />
    </article>

</>

    )
}


"use client";

import { profileData } from "@/Data/profileData";
import Image from "next/image";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";



export default function Profil() {
      const [showContacts, setShowContacts] = useState(false);

    return (
        <aside 
            className={`sidebar ${showContacts ? "active" : ""} bg-[var(--eerie-black-2)] border border-[var(--jet)] rounded-[20px] p-[15px] shadow-[var(--shadow-1)] z-[1] mb-[15px] max-h-[112px] overflow-hidden transition-[var(--transition-2)] `}
            data-sidebar>
            {/* TOP INFO */}
            <div className="relative flex justify-start items-center gap-5 flex-col sidebar-info ">
                <figure className="avatar-box">
                    <Image
                        src={profileData.photo}
                        alt={profileData.name}
                        className="avatar-img"
                        width={150}
                        height={150}
                        priority
                    />
                </figure>

                <div className="info-content">
                    <h1 className="name" title={profileData.name}>
                        {profileData.name}
                    </h1>
                    <div className="domaine-box">
                    {profileData.domaines.map((domaine, i) => (
                        <p className="title " key={i}>
                            {domaine}
                        </p>
                    ))}
                    </div>

                </div>

                {/* BUTTON */}
        <button
          className="info_more-btn flex items-center justify-between"
          data-sidebar-btn
          onClick={() => setShowContacts(!showContacts)}
        >
          <span>
            {showContacts ? "Hide Contacts" : "Show Contacts"}
          </span>
          <IoChevronDown />


        </button>
            </div>

            {/* CONTACTS */}
            <div className="sidebar-info_more">
                <div className="separator" />

                <ul className="contacts-list">
                    {profileData.contacts.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <li className="contact-item" key={index}>
                                <div className="icon-box">
                                    <Icon />
                                </div>

                                <div className="contact-info">
                                    <p className="contact-title">{item.title}</p>

                                    {item.type === "link" && (
                                        <a href={item.link} className="contact-link">
                                            {item.value}
                                        </a>
                                    )}

                                    {item.type === "time" && (
                                        <time dateTime={item.dateTime}>{item.value}</time>
                                    )}

                                    {item.type === "address" && (
                                        <address>{item.value}</address>
                                    )}
                                </div>
                            </li>
                        );
                    })}
                </ul>

                <div className="separator" />

                {/* SOCIAL LINKS */}
                <ul className="social-list">
                    {profileData.socials.map((social, index) => {
                        const Icon = social.icon;

                        return (
                            <li className="social-item" key={index}>
                                <a href={social.link} className="social-link">
                                    <Icon />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
}

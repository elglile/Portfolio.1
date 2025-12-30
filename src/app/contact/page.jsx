"use client";

import Header from "@/components/layout/Header";
import { useState } from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

export default function Contact() {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        message: "",
    });

    const isValid =
        form.fullname.trim() &&
        form.email.includes("@") &&
        form.message.trim();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid) return;

        console.log("Form sent:", form);

        setForm({ fullname: "", email: "", message: "" });
    };

    return (
        <div>
            <Header />
            <article className="contact active" data-page="contact">
                <header>
                    <h2 className="h2 article-title">Contact</h2>
                </header>

                {/* MAP */}
                <section className="mapbox">
                    <figure>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                            width="100%"
                            height="300"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </figure>
                </section>

                {/* FORM */}
                <section className="contact-form">
                    <h3 className="h3 form-title">Contact Form</h3>

                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                name="fullname"
                                className="form-input"
                                placeholder="Full name"
                                value={form.fullname}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="email"
                                name="email"
                                className="form-input"
                                placeholder="Email address"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <textarea
                            name="message"
                            className="form-input w-full"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />

                        <button className="form-btn" type="submit" disabled={!isValid}>
                            <IoPaperPlaneOutline />
                            <span>Send Message</span>
                        </button>
                    </form>
                </section>
            </article>
        </div>
    );
}
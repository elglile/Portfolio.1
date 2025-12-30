import { assets } from "@/assets/assets";
import { FaPaintBrush, FaCode, FaMobileAlt } from "react-icons/fa";


export const aboutData = {
intro: [
        "I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.",
        "My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.",
    ],

  services: [
    {
      logoType: "icon",
      logo: assets.icondesign,
      title: "Web design",
      text: "The most modern and high-quality design made at a professional level.",
    },
    {
      logoType: "icon",
      logo: assets.icondev,
      title: "Web development",
      text: "High-quality development of sites at the professional level.",
    },
    {
      logoType: "icon",
      logo: assets.iconapp,
      title: "Mobile apps",
      text: "Professional development of applications for iOS and Android.",
    },
    {
      logoType: "image",
      logo: assets.iconphoto,
      title: "Photography",
      text: "I make high-quality photos of any category at a professional level.",
    },
  ],
};

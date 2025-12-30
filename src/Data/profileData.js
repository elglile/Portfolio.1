import { assets } from "@/assets/assets";
import {
    IoMailOutline,
    IoPhonePortraitOutline,
    IoCalendarOutline,
    IoLocationOutline,
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoGithub,
} from "react-icons/io5";

export const profileData = {
    photo: assets.myavatar,
    name: "Om Kharche",
    domaines: ["Full Stack Developer", "UI/UX Designer"],

    contacts: [
        {
            title: "Email",
            value: "omtestmail@gmail.com",
            link: "mailto:omtestmail@gmail.com",
            icon: IoMailOutline,
            type: "link",
        },
        {
            title: "Phone",
            value: "+91 935960743",
            link: "tel:+12133522795",
            icon: IoPhonePortraitOutline,
            type: "link",
        },
        {
            title: "Birthday",
            value: "2 March, 2003",
            dateTime: "2003-03-02",
            icon: IoCalendarOutline,
            type: "time",
        },
        {
            title: "Location",
            value: "Pune, India",
            icon: IoLocationOutline,
            type: "address",
        },
    ],

    socials: [
        {
            name: "Facebook",
            link: "#",
            icon: IoLogoFacebook,
        },
        {
            name: "LinkedIn",
            link: "#",
            icon: IoLogoLinkedin,
        },
        {
            name: "Instagram",
            link: "#",
            icon: IoLogoInstagram,
        },
                {
            name: "GitHub",
            link: "#",
            icon: IoLogoGithub,
        },
    ],
};

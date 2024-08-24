import {BsTwitter, BsFacebook, BsLinkedin, BsGithub, BsDiscord, BsPerson, BsBriefcaseFill, BsPersonWorkspace, BsSpeaker, BsMailbox2} from "react-icons/bs"

export const socials = [
    {
      id: 1,
      href: "",
      icon: <BsTwitter />
    },
    {
      id: 2,
      href: "",
      icon: <BsFacebook />
    },
    {
      id: 3,
      href: "",
      icon: <BsDiscord />
    },
    {
      id: 4,
      href: "",
      icon: <BsGithub />
    },
    {
      id: 5,
      href: "",
      icon: <BsLinkedin />
    },
]

export const menus = [
    {
        id: 1,
        href: "/",
        icons: <BsPerson />,
        menu: "About me"
    },
    {
        id: 2,
        href: "/portfolio",
        icons: <BsBriefcaseFill />,
        menu: "Portfolio"
    },
    {
        id: 3,
        href: "/services",
        icons: <BsPersonWorkspace />,
        menu: "Services & Pricing"
    },
    {
        id: 4,
        href: "/blog",
        icons: <BsSpeaker />,
        menu: "Blog"
    },
    {
        id: 5,
        href: "/contact",
        icons: <BsMailbox2 />,
        menu: "About me"
    },
]
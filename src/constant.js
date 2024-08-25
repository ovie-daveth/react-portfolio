import {BsTwitter, BsFacebook, BsLinkedin, BsGithub, BsDiscord, BsPerson, BsBriefcaseFill, BsPersonWorkspace, BsSpeaker, BsMailbox2} from "react-icons/bs";
import reacticon from "./assets/logo192.png"
import angularicon from "./assets/angular.png"
import nexticon from "./assets/next.png"
import nodeicon from "./assets/node.png"
import expressticon from "./assets/express.png"
import gulpicon from "./assets/gulp.png"
import grunticon from "./assets/grunt.png"
import npmicon from "./assets/npm.png"
import sassicon from "./assets/sass.png"
import htmlicon from "./assets/html.png"
import cssicon from "./assets/css.png"
import giticon from "./assets/git.png"

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


export const Stacks = [
  {
    id: 1,
    title: "Vanilla Javascript",
    desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='text-white hover:underline' href="/">libero quial</a>`
  },
  {
    id: 2,
    icons: [angularicon, reacticon, nexticon ],
    title: "Angular, React & Next",
    desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='text-white hover:underline' href="/">libero quial</a>`
},
{
  id: 3,
  icons: [nodeicon, expressticon],
  title: "NodeJS, expressJs",
  desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='text-white hover:underline' href="/">libero quial</a>`
},
{
  id: 4,
  icons: [npmicon, gulpicon, grunticon],
  title: "Npm, gulp & grunt",
  desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='text-white hover:underline' href="/">libero quial</a>`
},
{
  id: 5,
  icons: [giticon],
  title: "Git & Github",
  desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='text-white hover:underline' href="/">libero quial</a>`
},
{
  id: 6,
  icons: [htmlicon, cssicon],
  title: "Html & css",
  desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='text-white hover:underline' href="/">libero quial</a>`
},
{
  id: 7,
  icons: [sassicon],
  title: "Sass",
  desc: `List skills/technologies here. You can change the icon above to any of the 1500+ FontAwesome <a className='link' href="/">libero quial</a>`
},


]
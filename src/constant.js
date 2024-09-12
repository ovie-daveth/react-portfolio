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
import { Briefcase } from "lucide-react";

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
        href: "/resume",
        icons: <Briefcase />,
        menu: "Resume"
    },
    {
      id: 5,
      href: "/blog",
      icons: <BsSpeaker />,
      menu: "Blog"
  },
    {
        id: 6,
        href: "/contact",
        icons: <BsMailbox2 />,
        menu: "Contact me"
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

export const ListItems = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Tutorials' },
  { id: 3, title: 'News' },
  { id: 4, title: 'Articles' },
  { id: 5, title: 'Openings' },
];

export const faqs = [
  {
    question: "What types of projects do you take on?",
    answer: "I specialize in building custom software solutions, ranging from small bug fixes and feature enhancements to full-scale web and mobile application development. As to the nature it includes web3 with rust, solidity and javascript; web2 with c#, dotnet, nodejs, react, angular and nestjs; mobile with reactNative; database mgt with sql, nosql (mongodb). If you're unsure whether your project fits, feel free to reach out for a consultation!"
  },
  {
    question: "How do you handle revisions and feedback?",
    answer: "Depending on the package you choose, I offer 1 to unlimited rounds of revisions. Revisions ensure that the final product meets your expectations, and you can always share your feedback during our scheduled review sessions."
  },
  {
    question: "What is your availability and typical turnaround time?",
    answer: "For the Basic package, I’m available for up to 10 hours a week, with a turnaround time of 2-4 weeks. For Standard and Premium packages, I can dedicate more hours and offer quicker turnarounds, typically within 1-2 weeks or faster for urgent projects."
  },
  {
    question: "How do payments and billing work?",
    answer: "I offer flexible, negotiable pricing based on an hourly rate. You can choose between hourly billing or milestone-based payments. Invoices are issued weekly or upon milestone completion, depending on your preference."
  },
  {
    question: "What tools do you use to manage projects?",
    answer: "I use email for communication in the Basic package. For Standard and Premium packages, I integrate tools like Trello, Jira, and Slack for better collaboration, progress tracking, and live updates. This helps keep the project on track and ensures transparency."
  },
  {
    question: "Can I upgrade my package during the project?",
    answer: "Absolutely! If your project grows in scope or you need additional support, you can upgrade your package at any time. We can adjust the pricing and timeline accordingly to fit your evolving needs."
  }
]
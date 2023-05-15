import { ArrowRightCircleIcon, Cog6ToothIcon, EyeIcon, HomeIcon, QuestionMarkCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { GrServices } from "react-icons/gr";
import { MdWorkspacesOutline } from "react-icons/md";
import { RiHandCoinFill } from "react-icons/ri";
import { RxValue } from "react-icons/rx";
import { FiTarget, FiFlag } from "react-icons/fi";
import image1 from "../src/images/image1.jpg"
import image2 from "../src/images/image2.jpg"
import image3 from "../src/images/image3.jpg"
import image4 from "../src/images/image4.jpg"
import image5 from "../src/images/image5.jpg"
import image6 from "../src/images/image6.jpg"
import image7 from "../src/images/image7.jpg"
import image8 from "../src/images/image8.jpg"
import image9 from "../src/images/image9.jpg"
import image10 from "../src/images/image10.jpg"
import image11 from "../src/images/image11.jpg"
import image12 from "../src/images/image12.jpg"
import image13 from "../src/images/image13.jpg"
import image14 from "../src/images/image14.jpg"
import image15 from "../src/images/image15.jpg"
import image16 from "../src/images/image16.jpg"
import image17 from "../src/images/image17.jpg"
import image18 from "../src/images/image18.jpg"
import image19 from "../src/images/image19.jpg"
import image20 from "../src/images/image20.jpg"

export const navigation = [
  {
    name: "Home",
    icon: <HomeIcon className="w-6 h-6 text-cyan-500"/>,
    href: "/",
    
  },
  {
    name: "About Us",
    icon: <UserGroupIcon className="w-6 h-6 text-cyan-500"/>,
    href: "about-us",
  },
  {
    name: "Products",
    icon: <RiHandCoinFill className="w-6 h-6 text-cyan-500"/>,
    href: "products",
  },
  {
    name: "Our Services",
    icon: <Cog6ToothIcon className="w-6 h-6 text-cyan-500"/>,
    href: "services",
  },
  {
    name: "Careers",
    icon: <MdWorkspacesOutline className="w-6 h-6 text-cyan-500"/>,
    href: "careers-jobs",
  },
  {
    name: "FAQs",
    icon: <QuestionMarkCircleIcon className="w-6 h-6 text-cyan-500"/>,
    href: "frequently-asked-questions",
  },
];


export const Features = [
  {
    "id": 1,
    "icon": <GrServices className="h-10 w-10"/>,
    "title": "Mobile Phone Banking",
    "path": "mobile-phone-banking/",
    "info": "MicroFinance MOBILE,We modified the Mobile Phone Banking App to enhance our customers' user...",
  },
  {
    "id": 2,
    "icon": <GrServices className="h-10 w-10"/>,
    "title": "ATM Services",
    "path": "atm-services/",
    "info": "MicroFinance ATMs, We successfully demonstarated to the country how an ARP can operate ATMs...",
  },
  {
    "id": 3,
    "icon": <GrServices className="h-10 w-10"/>,
    "title": "Money Transfers",
    "path": "money-transfers/",
    "info": "M-Pesa Money Transfer. Micro Finance also collaborates with Safaricom to ensure secure money transfer..",
  },
];

export const aboutLinks = [
  {
    name: "Branch Networks",
    icon: (
      <ArrowRightCircleIcon className="w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-500 " />
    ),
    path: "branch-networks",
  },
  {
    name: "Annual Reports",
    icon: (
      <ArrowRightCircleIcon className="w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-500 " />
    ),
    path: "annual-reports",
  },
  {
    name: "Financial Statements",
    icon: (
      <ArrowRightCircleIcon className="w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-500 " />
    ),
    path: "financial-statements",
  },
  {
    name: "Contact Us",
    icon: (
      <ArrowRightCircleIcon className="w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-500 " />
    ),
    path: "contact-us",
  },
  {
    name: "Community",
    icon: (
      <ArrowRightCircleIcon className="w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-500 " />
    ),
    path: "community",
  },
  {
    name: "Blog",
    icon: (
      <ArrowRightCircleIcon className="w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-500" />
    ),
    path: "blog",
  },
];

export const aboutInfo = [
  {
    icon: <EyeIcon className="h-6 w-6 text-cyan-500"/>,
    title: "Our Vision",
    desc: "To be the preferred provider of inclusive customer centric financial solutions.",
  },
  {
    icon: <FiTarget className="h-6 w-6 text-cyan-500"/>,
    title: "Our Mission",
    desc: "Empowering communities through convenient banking.",
  },
  {
    icon: <RxValue className="h-6 w-6 text-cyan-500"/>,
    title: "MicroFinance's Value Proposition",
    desc: "Pride's proposition to the market shall revolve around three key unique selling points. These are; Fast turnaround time, Ease of use, Excellent customer service",
  },
  {
    icon: <FiFlag className="h-6 w-6 text-cyan-500"/>,
    title: "Core Values",
    desc: "Best Customer Experience, Efficiency and Effectiveness, Fairness, Integrity and Accountability, Teamwork​",
  },
];

export const Directors = [
  {
    img: image6,
    name: "Richard Kamau",
    occupation: "BOARD CHAIRMAN"
  },
  {
    img: image4,
    name: "Florence Mutheu",
    occupation: "DIRECTOR"
  },
  {
    img: image8,
    name: "LaDonnah Silas",
    occupation: "DIRECTOR"
  },
  {
    img: image2,
    name: "Charles Klaus",
    occupation: "DIRECTOR"
  },
  {
    img: image5,
    name: "Kennedy Young",
    occupation: "DIRECTOR"
  },
  {
    img: image1,
    name: "Faith Mwaura",
    occupation: "DIRECTOR"
  },
  {
    img: image7,
    name: "Elias Ochieng'",
    occupation: "DIRECTOR"
  },
  {
    img: image3,
    name: "Samuel Oloisudori",
    occupation: "DIRECTOR"
  },
  {
    img: image9,
    name: "Nchuri Ncheke",
    occupation: "DIRECTOR"
  },
  {
    img: image10,
    name: "William Chu",
    occupation: "DIRECTOR"
  },
]

export const Executives = [
  {
    img: image11,
    name: "Caroline Mwangangi",
    occupation: "MANAGING DIRECTOR"
  },
  {
    img: image12,
    name: "Fredrick Kimuyu",
    occupation: "EXECUTIVE DIRECTOR"
  },
  {
    img: image13,
    name: "Bonnie Njoki",
    occupation: "HEAD OF LEGAL"
  },
  {
    img: image14,
    name: "Katerina Petrova",
    occupation: "HEAD OF INTERNAL AUDIT"
  },
  {
    img: image15,
    name: "Rahul Singh",
    occupation: "HEAD OF HUMAN CAPITAL MANAGEMENT"
  },
  {
    img: image16,
    name: "Chandra Omar",
    occupation: "HEAD OF FINANCE"
  },
  {
    img: image17,
    name: "Gilbert Ng'eno",
    occupation: "HEAD OF BUSINESS DEVELOPMENT & MARKETING"
  },
  {
    img: image18,
    name: "Emmanuel Njiiri",
    occupation: "HEAD OF ICT"
  },
  {
    img: image19,
    name: "Megan Freeman",
    occupation: "HEAD OF TREASURY"
  },
  {
    img: image20,
    name: "Daniel Chipter",
    occupation: "HEAD OF CREDIT BUSINESS"
  },
  {
    img: image1,
    name: "Emily Wamunyu",
    occupation: "HEAD OF RISK MANAGEMENT"
  },
  {
    img: image8,
    name: "Beatrice Laura",
    occupation: "HEAD OF ADMINISTRATION AND PROCUREMENT"
  },
]

export const blogPosts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];
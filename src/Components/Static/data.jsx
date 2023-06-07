import { HiHome } from "react-icons/hi";

import { HiSignal } from "react-icons/hi2";
import { GiHanger } from "react-icons/gi";

import {
  BsClock,
  BsFire,
  BsNewspaper,
  BsTrophy,
  BsFlag,
  BsShieldExclamation,
} from "react-icons/bs";
import { BiLike, BiShoppingBag } from "react-icons/bi";
import {
  MdSubscriptions,
  MdMusicVideo,
  MdVideoLibrary,
  MdHistory,
  MdOutlineKeyboardArrowDown,
  MdMusicNote,
  MdOutlineMovieCreation,
  MdOutlineLightbulb,
  MdSettings,
} from "react-icons/md";
import { RiVideoLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { SlQuestion } from "react-icons/sl";

export const SidebarItems = {
  Top: [
    {
      icon: <HiHome />,
      name: "Home",
    },
    {
      icon: <MdMusicVideo />,
      name: "Shorts",
    },
    {
      icon: <MdSubscriptions />,
      name: "Subscription",
    },
  ],
  Middle: [
    {
      icon: <MdVideoLibrary />,
      name: "Library",
    },
    {
      icon: <MdHistory />,
      name: "History",
    },
    {
      icon: <RiVideoLine />,
      name: "videos",
    },
    {
      icon: <BsClock />,
      name: "Watch later",
    },
    {
      icon: <BiLike />,
      name: "Like videos",
    },
    {
      icon: <MdOutlineKeyboardArrowDown />,
      name: "Show more",
    },
  ],
  Explore: [
    { icon: <BsFire />, name: "Trending" },
    { icon: <BiShoppingBag />, name: "Shopping" },
    { icon: <MdMusicNote />, name: "Music" },
    { icon: <MdOutlineMovieCreation />, name: "Movies&shows" },
    { icon: <HiSignal />, name: "Live" },
    { icon: <SiYoutubegaming />, name: "Gaming " },
    { icon: <BsNewspaper />, name: "News" },
    { icon: <BsTrophy />, name: "Sports" },
    { icon: <MdOutlineLightbulb />, name: "Learning" },
    { icon: <GiHanger />, name: "Fashion & beauty " },
  ],
};

export const Category = [
  "All",
  "Music",
  "Mixes",
  "Tamil Cinema",
  "CSS",
  "Live",
  "Tamil television",
];

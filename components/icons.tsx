import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiOutlineClose,
  AiOutlineEllipsis,
  AiOutlinePlus,
  AiOutlineWarning,
} from "react-icons/ai";
import { MdSkipNext } from "react-icons/md";
import { BiCalendar, BiHistory } from "react-icons/bi";
import {
  BsActivity,
  BsCheck2,
  BsChevronDown,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsFire,
  BsMoonStars,
  BsSun,
} from "react-icons/bs";
import { RiNextjsFill } from "react-icons/ri";
import { FaSort, FaReact, FaUserAlt, FaHome, FaNodeJs } from "react-icons/fa";
import { ImSpinner8, ImStatsBars } from "react-icons/im";
import { DiNodejs } from "react-icons/di";
import { LuSettings } from "react-icons/lu";
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md";
import { RxDashboard, RxMixerHorizontal } from "react-icons/rx";

export type IconKeys = keyof typeof icons;

type IconsType = {
  [key in IconKeys]: React.ElementType;
};

const icons = {
  // Providers
  google: AiFillGoogleCircle,
  github: AiFillGithub,

  // Dashboard Icons
  dashboard: RxDashboard,
  activity: BsActivity,
  settings: LuSettings,
  backend: FaNodeJs,
  fullstack: RiNextjsFill,
  frontend: FaReact,
  others: MdSkipNext,
  home: FaHome,
  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
};

export const Icons: IconsType = icons;

import React from "react";
import Home from "../dashboard/home/Home";
import Settings from "../dashboard/settings/Settings";
import Monitoring from "./monitoring/Monitoring";
import MonitoringDetails from "./monitoring/MonitoringDetails";
import Team from "./team/Team";
// import Profile from "./profile/Profile";
import Feedback from "./feedback/Feedback";
import Duty from "./duty/Duty";
import Board from './board/Board';

import { FaHome, FaClipboardList, FaComments, FaCoffee, FaChalkboardTeacher } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";

import { isLoginMember } from '../../api/auth';

const invisibleToMember = isLoginMember();

function isActive(path) {
  const url = window.location.pathname;
  return path === url;
}

const HomeIcon = <FaHome />;
const SettingsIcon = <MdSettings />;
const MonitoringIcon = <FaClipboardList title="Acompanhamento" />;
const TeamIcon = <IoIosPeople title="Equipe" />;
const FeedbackIcon = <FaComments title="Feedback" />;
const DutyIcon = <FaCoffee title="Plantão" />;
const BoardIcon = <FaChalkboardTeacher title="Diretorias"/>;

export const routes = [
  {
    path: "/dashboard/home",
    active: (path) => isActive(path),
    icon: HomeIcon,
    component: Home,
  },
  {
    path: "/dashboard/settings",
    active: (path) => isActive(path),
    icon: SettingsIcon,
    component: Settings,
    invisible: invisibleToMember,
    limitRouteToJe: true, 
  },
  {
    path: "/dashboard/monitoring",
    active: (path) => isActive(path),
    icon: MonitoringIcon,
    component: Monitoring,
    invisible: invisibleToMember,
    limitRouteToJe: true, 
  },
  {
    path: "/dashboard/monitoring/details/:memberId",
    active: (path) => isActive(path),
    invisible: true,
    component: MonitoringDetails,
  },
  {
    path: "/dashboard/team",
    active: (path) => isActive(path),
    icon: TeamIcon,
    component: Team,
  },
  // {
  //   path: "/dashboard/profile",
  //   active: (path) => isActive(path),
  //   component: Profile,
  //   invisible: true,
  // },
  {
    path: "/dashboard/feedback",
    active: (path) => isActive(path),
    icon: FeedbackIcon,
    component: Feedback,
    invisible: true,
  },
  {
    path: "/dashboard/duty",
    active: (path) => isActive(path),
    icon: DutyIcon,
    component: Duty,
  },
  {
    path: "/dashboard/board",
    active: (path) => isActive(path),
    icon: BoardIcon,
    component: Board,
    invisible : invisibleToMember,
  },
];
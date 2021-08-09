import React from "react";
import {
  FiUserCheck,
  FiUsers,
  FiHome,
  FiSettings,
  FiShoppingBag,
  FiToggleLeft,
  FiList,
  FiActivity,
  FiCalendar,
  FiStar,
  FiDroplet,
  FiGrid,
  FiClock,
  FiCopy,
  FiUser,
  FiPieChart,
  FiCompass,
  FiHelpCircle,
  FiShoppingCart,
} from "react-icons/fi";

import { AiFillProject } from "react-icons/ai";

const initialState = [
  {
    title: "Credit Managment",
    items: [
      {
        url: "/",
        icon: <FiCompass size={20} />,
        title: "Dashboard",
        items: [],
      },
      {
        url: "/",
        icon: <FiActivity size={20} />,
        title: "Reports",
        items: [
          {
            url: "/",
            title: "General",
            items: [],
          },
          {
            url: "/",
            title: "History",
            items: [],
          },
          {
            url: "/",
            title: "Pedding",
            items: [],
          },
          {
            url: "/",
            title: "Statement",
            items: [],
          },
        ],
      },
      {
        url: "/",
        icon: <AiFillProject size={20} />,
        title: "Projects",
        items: [
          {
            url: "/projects",
            title: "Project's",
            items: [],
          },
          {
            url: "/projects/import",
            title: "Import",
            items: [],
          },
        ],
      },
      {
        url: "/",
        icon: <FiShoppingBag size={20} />,
        title: "Sales",
        items: [
          {
            url: "/orders",
            title: "Order's",
            items: [],
          },
          {
            url: "/sales",
            title: "Sales",
            items: [],
          },
        ],
      },
      {
        url: "/",
        icon: <FiUserCheck size={20} />,
        title: "Candidates",
        items: [
          {
            url: "/candidates/dashboard",
            title: "Dashboard's",
            items: [],
          },
          {
            url: "/candidates",
            title: "Candidate's",
            items: [],
          },
          {
            url: "/candidates/import",
            title: "Import",
            items: [],
          },
        ],
      },
      {
        url: "/",
        icon: <FiSettings size={20} />,
        title: "Settings",
        badge: {
          color: "bg-indigo-500 text-white",
          text: 6,
        },
        items: [
          {
            url: "/products",
            title: "Products",
            items: [],
          },
          {
            url: "/customers",
            title: "Customer's",
            items: [],
          },
          {
            url: "/projects",
            title: "Project's",
            items: [],
          },
          {
            url: "/companies",
            title: "Companies",
            items: [],
          },
        ],
      },
    ],
  },
];

export default function navigation(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

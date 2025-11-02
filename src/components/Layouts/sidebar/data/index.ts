import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        icon: Icons.HomeIcon,
        items: [
          {
            title: "Project 1: Chemistry Discussion",
            url: "/",
          },
        ],
      },
      {
        title: "Task Manager",
        url: "/task",
        icon: Icons.Table,
        items: [],
      },
      {
        title: "Disucssion Board",
        url: "/tables",
        icon: Icons.Table,
        items: [],
      },
    ],
  },
  
];

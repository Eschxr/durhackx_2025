import * as Icons from "../icons";
// import fs from 'fs';

// interface Project {
//   title: string,
//   url: string
// }

// const filePath: string = 'projects.json';
// fs.readFile(filePath, 'utf8', (err, jsonString: string) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   let data: Project = JSON.parse(jsonString);
//   let title = data.title
//   let url = data.url
//   console.log(title, url)
// });

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
        title: "Discussion Board",
        url: "/tables",
        icon: Icons.Table,
        items: [],
      },
    ],
  },
  
];

import {
  MdTask,
  MdQuiz,
  MdReadMore,
} from "react-icons/md";

import { IoMdPeople, IoMdStar } from "react-icons/io";

const exploreRouterMenu = [
  {
    sectionId: "signup",
    sectionLabel: "Sign Up",
    sectionItems: [
      {
        path: "signup-fiveday",
        label: "5 Day Club",
        Icon: IoMdPeople,
      },
      {
        path: "signup-weekly",
        label: "GNC Weekly Meetings",
        Icon: IoMdStar,
      },
      {
        path: "volunteer-signup",
        label: "Volunteer",
        Icon: MdTask,
      }
    ]
  },
  {
    sectionId: "volunteer",
    sectionLabel: "Volunteer",
    sectionItems: [
      {
        path: "volunteer-info",
        label: "What's Involved",
        Icon: MdQuiz,
      },
      {
        path: "volunteer-signup",
        label: "Sign Up",
        Icon: MdTask,
      },
    ],
  },
  {
      sectionId: "about",
      sectionLabel: "About",
      sectionItems: [
          {
              path: "about",
              label: "About Good News Club",
              Icon: MdReadMore,
          },
      ]
  }
];

export default exploreRouterMenu;
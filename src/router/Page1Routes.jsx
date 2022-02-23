import { Page1 } from "../Page1";
import { Page1DA } from "../Page1DA";
import { Page1DB } from "../Page1DB";

export const Page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/DA",
    exact: false,
    children: <Page1DA />
  },
  {
    path: "/DB",
    exact: false,
    children: <Page1DB />
  }
];

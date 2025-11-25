import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/home-page";
import RulesPage from "../components/rules-page";
import {
  maktabRulesContent,
  kitabRulesContent,
  admissionApplicationContent,
} from "../data/page-content";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/অভিভাবকের-নিয়মাবলী/মক্তব-বিভাগ",
        element: <RulesPage content={maktabRulesContent} />,
      },
      {
        path: "/অভিভাবকের-নিয়মাবলী/কিতাব-বিভাগ",
        element: <RulesPage content={kitabRulesContent} />,
      },
      {
        path: "/দাখেলার-আবেদন",
        element: <RulesPage content={admissionApplicationContent} />,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home_page";
import {WordBank} from "./pages/word_bank_page";
import ChapterPage from "./pages/chapter_page";
import VersePage from "./pages/verse_page";
import Translation from "./pages/translation_page";
import {Register} from "./pages/register_page";
import LogIn from './pages/login_page';
import WordPage from './pages/word_page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "signup/",
        element: <Register/>,
      },
      {
        path: "login/",
        element: <LogIn/>,
      },
      {
        path: "chapter/:chapterNumber/",
        element: <ChapterPage/>,
      },
      {
        path: "chapter/:chapterNumber/verse/:verseNumber/",
        element: <VersePage/>,
      },
      {
        path: "word/:word/",
        element: <WordPage/>,
      },
      {
        path: "wordbank/",
        element: <WordBank/>,
      },
      {
        path: "translation/",
        element: <Translation/>,
      },
    ],
  },
]);

export default router;
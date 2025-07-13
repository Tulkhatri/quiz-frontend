import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Dashboard from "./pages/dashboard";
import MainLayout from "./layouts/MainLayout";
import CategoryManage from "./pages/category-manage/CategoryManage";
import CategoryManageForm from "./pages/category-manage/CategoryManageForm";
import DifficultyLevel from "./pages/difficulty-level-manage/DifficultyLevel";
import DifficultyLevelForm from "./pages/difficulty-level-manage/DifficultyLevelForm";
import Quiz from "./pages/quiz/Quiz";
import QuizForm from "./pages/quiz/QuizForm";
import Question from "./pages/question-manage/Question";
import QuestionForm from "./pages/question-manage/QuestionForm";
import Answer from "./pages/answer-manage/Answer";
import AnswerForm from "./pages/answer-manage/AnswerForm";
import QuizAttempt from "./pages/quiz-attempt/QuizAttempt";
import PageNotFound from "./pages/error";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },

    {
      element: <PrivateRoute />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true, // same as path: ""
              element: <Dashboard />,
            },
            {
              path: "dashboard", // same as path: ""
              element: <Dashboard />,
            },
            {
              path: "category",
              element: <CategoryManage />,
            },
            {
              path: "category/add",
              element: <CategoryManageForm />,
            },
            {
              path: "level",
              element: <DifficultyLevel />,
            },
            {
              path: "level/add",
              element: <DifficultyLevelForm />,
            },
            {
              path: "quiz",
              element: <Quiz />,
            },
            {
              path: "quiz/add",
              element: <QuizForm />,
            },
            {
              path: "question",
              element: <Question />,
            },
            {
              path: "question/add",
              element: <QuestionForm />,
            },
            {
              path: "answer",
              element: <Answer />,
            },
            {
              path: "answer/add",
              element: <AnswerForm />,
            },
            {
              path: "attempt",
              element: <QuizAttempt />,
            },
            {
              path: "*",
              element: <PageNotFound />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;

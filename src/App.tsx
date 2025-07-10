import { Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/category" element={<CategoryManage />} />
        <Route path="/category/add" element={<CategoryManageForm />} />
        <Route path="/level" element={<DifficultyLevel />} />
        <Route path="/level/add" element={<DifficultyLevelForm />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/add" element={<QuizForm />} />
        <Route path="/question" element={<Question />} />
        <Route path="/question/add" element={<QuestionForm />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/answer/add" element={<AnswerForm />} />
        <Route path="/attempt" element={<QuizAttempt />} />
      </Route>
    </Routes>
  );
}

export default App;

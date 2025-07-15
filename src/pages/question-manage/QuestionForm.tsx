import { NavLink, useLocation, useNavigate } from "react-router-dom";
import InputTypeText from "../../components/text-field";
import Button from "../../components/button";
import type { QuestionType } from "./type";
import { useEffect, useState } from "react";
import {getquiz, questionSave } from "../../services/pages";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Progressing from "../../components/Progressing";

interface QuizType{
  title: string;
  id:number;
}

const QuestionForm = () => {

   const [quiz, setQuiz] = useState<QuizType[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   const navigate = useNavigate();
   const location = useLocation();

   const item = location.state?.item;

   const getQuizList = async () => {
     setLoading(true);
     try {
       const { data } = await getquiz();
       if (data?.status === 200) {
         setQuiz(data.response);
       } else {
         toast.error(data.message);
       }
     } finally {
       setLoading(false);
     }
   };

   const {
     register,
     handleSubmit,
     formState: { errors },
     setValue,
   } = useForm<QuestionType>();
   const onSubmit = async (formData: QuestionType) => {
     setLoading(true);
     if (item?.id) {
       formData.id = item.id;
     }
     try {
       const { data } = await questionSave(formData);
       if (data?.status === 200) {
         toast.success(data.message, {
           onClose: () => navigate("/question"),
           autoClose: 500,
         });
       } else {
         toast.error(data.message);
       }
     } finally {
       setLoading(false);
     }
   };

   useEffect(() => {
     getQuizList();
   }, []);

   useEffect(() => {
     if (item) {
       setValue("question_text", item.question_text);
       setValue("quiz_id", item.quiz_id);
     }
   }, [item, quiz, setValue]);


  return (
    <div className="dashboard">
      <div className="header-section">
        <div className="left-section">
          <h3>{item?.id ? "Update" : "Add"} Question</h3>
        </div>
        <div className="right-section">
          <NavLink className="nav-link" to="/question">
            Back
          </NavLink>
        </div>
      </div>
      <div className="body-section">
        <form onSubmit={handleSubmit(onSubmit)} className="loader_relative">
          <Progressing loading={loading} />
          <div className="input-wrapper">
            <label>
              Quiz <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <select
                {...register("quiz_id", {
                  required: "Quiz is required",
                })}
                defaultValue=""
              >
                <option value="" disabled>
                  Select Quiz
                </option>

                {quiz?.map((item) => (
                  <option key={item?.id} value={item?.id}>
                    {item?.title}
                  </option>
                ))}
              </select>

              {errors.quiz_id && (
                <p className="error">{errors.quiz_id.message}</p>
              )}
            </div>
          </div>
          <div className="input-wrapper">
            <label>
              Question <span className="required">*</span>
            </label>
            <div className="input-error-wrapper">
              <InputTypeText
                type="text"
                placeholder="Enter Question"
                {...register("question_text", {
                  required: "Question is required",
                })}
              />
              {errors.question_text && (
                <p className="error">{errors.question_text.message}</p>
              )}
            </div>
            <Button
              buttonName={item?.id ? "Update" : "Save"}
              loading={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionForm;
